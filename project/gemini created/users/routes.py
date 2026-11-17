from sqlalchemy.orm import Session
from starlette.status import HTTP_201_CREATED
from sqlalchemy.ext.asyncio import session
from fastapi import APIRouter
from users import controller,dtos
from db import db_get
from fastapi import Depends,status
from typing import List

prd_routes=APIRouter(prefix="/product")
user_routes=APIRouter(prefix="/user")

@prd_routes.post("/add",status_code=status.HTTP_201_CREATED)
def add_product(body:dtos.productschema,db=Depends(db_get)):
    return controller.add_product(body,db)


@prd_routes.get("/all_prd",status_code=status.HTTP_200_OK,response_model=list[dtos.product_responce_schema])
def get_allprd(db=Depends(db_get)):
    return controller.get_product(db)


@prd_routes.get("/one_prd/{prdid}")
def get_oneprd(prdid:int,db=Depends(db_get)):
    return controller.one_product(prdid,db)

@prd_routes.put("/update_prd/{prdid}")
def update_prd(body:dtos.updateproductschema, prdid:int, db=Depends(db_get)):
    return controller.update_prd(body, prdid, db)


@prd_routes.delete("/delete_prd/{prdid}")
def delete_prd(prdid:int, db=Depends(db_get)):
    return controller.delete_prd(prdid, db)
    

@user_routes.post("/register",response_model=dtos.userresponceschema,status_code=status.HTTP_201_CREATED)
def register(body:dtos.userschema,db:Session=Depends(db_get)):
    return controller.register(body,db)