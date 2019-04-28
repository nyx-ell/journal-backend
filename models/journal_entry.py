from models.base_model import BaseModel
from models.user import User
import peewee as pw

class JournalEntry(BaseModel):
    user = pw.ForeignKeyField(User, backref="journal")
    title = pw.CharField()
    content = pw.TextField()
    