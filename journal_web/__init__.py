from app import app
from flask import render_template
from journal_web.blueprints.users.views import users_blueprint
from flask_assets import Environment, Bundle
from .util.assets import bundles

assets = Environment(app)
assets.register(bundles)

@app.route("/")
@app.route('/<path:path>')
def home(path=None):
    return render_template('index.html')

@app.route("/manifest.json")
def manifest():
    return app.send_static_file("build/manifest.json")

@app.route("/service-worker.js")
def service():
    return app.send_static_file("build/service-worker.js")

@app.route("/precache-manifest.322590f41ec23386411d3cb10f26a475.js")
def precache():
    return app.send_static_file("build/precache-manifest.322590f41ec23386411d3cb10f26a475.js")
