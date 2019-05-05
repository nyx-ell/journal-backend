from app import app
from models.user import User
from models.journal_entry import JournalEntry
from flask import Blueprint, jsonify, request
from werkzeug.utils import secure_filename
from helpers import encode_auth_token, decode_auth_token, allowed_file, upload_file_to_s3
import datetime

journals_api_blueprint = Blueprint('journals_api',
                             __name__,
                             template_folder='templates')


@journals_api_blueprint.route('/', methods=['GET'])
def index():
    auth_header = request.headers.get('Authorization')

    if auth_header:
        token = auth_header.split(" ")[1]
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Not authorization header.'
        }])

    decoded = decode_auth_token(token)
    user = User.get(User.id == decoded)

    if user:
        journals = JournalEntry.select().where(JournalEntry.user_id == user.id)
        return jsonify({
            'message': 'Successfully retrieved user journal',
            'status': 'success',
            'journals': [{'id': journal.id,
                'created_at': journal.created_at,
                'updated_at': journal.updated_at,
                'title': journal.title,
                'content': journal.content,
                'image_path': journal.image_path} for journal in journals],
        })
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Authentication failed.'
        }])


@journals_api_blueprint.route('/new', methods=['POST'])
def create():
    auth_header = request.headers.get('Authorization')

    if auth_header:
        token = auth_header.split(" ")[1]
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Not authorization header.'
        }])

    decoded = decode_auth_token(token)
    user = User.get(User.id == decoded)

    if user:
        req_data = request.form
        user_id = req_data['user_id']
        title = req_data['title']
        content = req_data['content']
    
        # check if request has file
        if 'file' not in request.files:
            return jsonify({
                'status': 'failed',
                'message': 'No file part'
            })

        file = request.files['file']
        # # if user does not select file, browser also submit an empty part without filename
        # if file.filename == '':
        #     return jsonify({
        #         'status': 'failed',
        #         'message': 'No selected file'
        #     })

        if file and allowed_file(file.filename):
            file.filename = secure_filename(str(user_id) + str(datetime.datetime.now()) + file.filename)
            output = upload_file_to_s3(file, app.config.get['S3_BUCKET'])
            
            journal_entry = JournalEntry(user_id=user_id, title=title, content=content, image_path=output)

            if journal_entry.save():
                return jsonify({
                        'message': 'Successfully created journal entry.',
                        'status': 'success',
                        'user': {
                            'id': journal_entry.id,
                            'user_id': journal_entry.user_id,
                            'title': journal_entry.title,
                            'content': journal_entry.content,
                            'image_path': journal_entry.image_path,
                        },
                        'redirect':'https://journal-nyx.herokuapp.com/journals/'
                    })
            else:
                errors = journal_entry.errors
                return jsonify({
                    'status': 'failed',
                    'message': errors
                })
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Authentication failed.'
        }])


@journals_api_blueprint.route('/<id>', methods=['GET'])
def show(id):
    auth_header = request.headers.get('Authorization')

    if auth_header:
        token = auth_header.split(" ")[1]
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Not authorization header.'
        }])

    decoded = decode_auth_token(token)
    user = User.get(User.id == decoded)

    if user:
        journal = JournalEntry.get(JournalEntry.id == id)
        return jsonify({
            'message': 'Successfully retrieved journal entry',
            'status': 'success',
            'journal': {
                'id': journal.id,
                'created_at': journal.created_at,
                'updated_at': journal.updated_at,
                'user_id': journal.user_id,
                'title': journal.title,
                'content': journal.content,
                'image_path': journal.image_path
            }
        })
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Authentication failed.'
        }])


@journals_api_blueprint.route('/<id>', methods=['POST'])
def update(id):
    auth_header = request.headers.get('Authorization')

    if auth_header:
        token = auth_header.split(" ")[1]
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Not authorization header.'
        }])

    decoded = decode_auth_token(token)
    user = User.get(User.id == decoded)
    journal_entry = JournalEntry.get(JournalEntry.id == id)

    if user and journal_entry:
        req_data = request.form
        title = req_data['title']
        content = req_data['content']

        # check if request has file
        # if no new file uploaded, use current image_path
        if 'file' not in request.files:
            output = journal_entry.image_path
        else:
            file = request.files['file']
            # # if user does not select file, browser also submit an empty part without filename
            # if file.filename == '':
            #     return jsonify({
            #         'status': 'failed',
            #         'message': 'No selected file'
            #     })
            if file and allowed_file(file.filename):
                file.filename = secure_filename(str(user.id) + str(datetime.datetime.now()) + file.filename)
                output = upload_file_to_s3(file, app.config.get['S3_BUCKET'])

        journal_entry.title = title
        journal_entry.content = content
        journal_entry.image_path = output

        if journal_entry.save():
            return jsonify({
                'message': 'Successfully updated journal entry',
                'status': 'success',
                'journal': {
                    'id': journal_entry.id,
                    'created_at': journal_entry.created_at,
                    'updated_at': journal_entry.updated_at,
                    'user_id': journal_entry.user_id,
                    'title': journal_entry.title,
                    'content': journal_entry.content,
                    'image_path': journal_entry.image_path
                }
            })
        else:
            errors = journal_entry.errors
            return jsonify([{
                'status': 'failed',
                'message': errors
            }])

        
@journals_api_blueprint.route('/<id>/delete', methods=['POST'])
def destroy(id):
    auth_header = request.headers.get('Authorization')

    if auth_header:
        token = auth_header.split(" ")[1]
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Not authorization header.'
        }])

    decoded = decode_auth_token(token)
    user = User.get(User.id == decoded)

    if user:
        journal_entry = JournalEntry.get(JournalEntry.id == id)
        journal_entry.delete_instance()

        return jsonify({
            'message': 'Successfully deleted journal entry',
            'status': 'success',
        })
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Authentication failed.'
        }])