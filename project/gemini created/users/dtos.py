from pydantic import BaseModel
from typing import Optional

class productschema(BaseModel):
    name: str 
    price: int
    image: str

class product_responce_schema(BaseModel):
    id:int 
    name: str 
    price: int
    

class updateproductschema(BaseModel):
    name: Optional[str] = None
    price: Optional[int] = None
    image: Optional[str] = None

class userschema(BaseModel):

    name:str
    username:str 
    password:str
    email:str


class userresponceschema(BaseModel):

    name:str
    username:str 
    email:str
    id:int