from models.user import User
from models.journal_entry import JournalEntry
from flask import Blueprint, jsonify, request
from helpers import encode_auth_token, decode_auth_token

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
                'content': journal.content} for journal in journals],
        })
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Authentication failed.'
        }])


@journals_api_blueprint.route('/new', methods=['POST'])
def create():
    req_data = request.get_json()
    user_id = req_data['user_id']
    title = req_data['title']
    content = req_data['content']
    user = User.get(User.id == user_id)

    if user:
        journal_entry = JournalEntry(user_id=user_id, title=title, content=content)

        if journal_entry.save():
            token = encode_auth_token(user)
            return jsonify({
                    'auth_token': token,
                    'message': 'Successfully created journal entry.',
                    'status': 'success',
                    'user': {
                        'id': journal_entry.id,
                        'user_id': journal_entry.user_id,
                        'title': journal_entry.title,
                        'content': journal_entry.content,
                    }
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
                'message': 'User cannot be found.'
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
                'content': journal.content
            }
        })
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Authentication failed.'
        }])


