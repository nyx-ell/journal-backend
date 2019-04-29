from app import app
from flask_cors import CORS

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

## API Routes ##
from journal_api.blueprints.users.views import users_api_blueprint
from journal_api.blueprints.sessions.views import sessions_api_blueprint
from journal_api.blueprints.journals.views import journals_api_blueprint

app.register_blueprint(users_api_blueprint, url_prefix='/api/v1/users')
app.register_blueprint(sessions_api_blueprint, url_prefix='/api/v1/sessions')
app.register_blueprint(journals_api_blueprint, url_prefix='/api/v1/journals')