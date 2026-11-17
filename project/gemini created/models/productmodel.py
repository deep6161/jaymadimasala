from sqlalchemy import false
from sqlalchemy import Column,Integer,Boolean,String
from db import Base

class product(Base):
    __tablename__="products"

    id=Column(Integer,primary_key=True)
    name=Column(String(50),nullable=False)
    price=Column(Integer,nullable=False)
    image=Column(String(100),nullable=False)