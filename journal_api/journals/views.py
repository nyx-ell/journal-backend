from models.user import User
from models.journal_entry import JournalEntry
from flask import Blueprint, jsonify, request
from helpers import encode_auth_token, decode_auth_token

journals_api_blueprint = Blueprint('journals_api',
                             __name__,
                             template_folder='templates')

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
