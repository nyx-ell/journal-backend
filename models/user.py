from models.base_model import BaseModel
import peewee as pw


class User(BaseModel):
    email = pw.CharField(unique=True)
    password = pw.CharField()
    first_name = pw.CharField()
    last_name = pw.CharField(null=True)
