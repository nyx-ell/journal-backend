from app import app
import peewee as pw
from models.user import User
from models.base_model import BaseModel
from playhouse.hybrid import hybrid_property

class JournalEntry(BaseModel):
    user = pw.ForeignKeyField(User, backref="journal")
    title = pw.CharField()
    content = pw.TextField()
    image_path = pw.CharField()

    @hybrid_property
    def image_url(self):
        return app.config['S3_LOCATION'] + self.image_path
    