from unicodedata import name
from pydantic import HttpUrl
from fastapi.routing import serialize_response
from users import dtos
from db import db_get
from sqlalchemy.orm import Session
from models.productmodel import product
from models.usermodel import usermodel
from fastapi import HTTPException
from pwdlib import PasswordHash





def add_product(body:dtos.productschema,db:Session,):
    data=body.model_dump()
    new_product=product(
        name=data["name"],
        price=data["price"],
        image=data["image"]
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return {"status":"product added","data":new_product}



def  get_product(db:Session):
    prd=db.query(product).all()
    return prd

def one_product(prd_id:int,db:Session):
    oneprd=db.query(product).get(prd_id)

    if not oneprd:
        return HTTPException(404)
    
    return {"ststus":"one product","one prd":oneprd}


def update_prd(body:dtos.updateproductschema, prd_id:int, db: Session):
    one_prd= db.query(product).get(prd_id)
    if not one_prd:
        return HTTPException(404)
    
    body = body.model_dump()

    for field, value in body.items():
        if value is not None:          # ✅ only update fields that were sent
            setattr(one_prd, field, value)

    db.add(one_prd)
    db.commit()
    db.refresh(one_prd)

    return {"status": "one product updated", "one prd": one_prd}


def delete_prd(prd_id:int,db:Session):
    one_prd= db.query(product).get(prd_id)
    if not one_prd:
        return HTTPException(404)
    
    db.delete(one_prd)
    db.commit()
    

    return None



password_hash = PasswordHash.recommended()
def get_password_hash(password):
    return password_hash.hash(password)

def register(body:dtos.userschema,db:Session):

    is_user=db.query(usermodel).filter(usermodel.username == body.username).first()
    if is_user :
        raise HTTPException(400,detail="user name already exist..")

    is_user=db.query(usermodel).filter(usermodel.email == body.email).first()  
    if is_user:
        raise HTTPException(400,detail="email already exist..")
    
    hash_password=get_password_hash(body.password)

    new_user=usermodel(
        name=body.name,
        username=body.username,
        hash_password=hash_password,
        email=body.email
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)


    return new_user