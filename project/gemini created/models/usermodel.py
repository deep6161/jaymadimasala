from sqlalchemy import false
from sqlalchemy import Column,Integer,Boolean,String
from db import Base


class usermodel(Base):
    __tablename__ = "users"

    id=Column(Integer,primary_key=True)
    name=Column(String) 
    username=Column(String,nullable=false) 
    hash_password=Column(String,nullable=false)
    email=Column(String)