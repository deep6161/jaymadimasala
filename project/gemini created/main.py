from fastapi import FastAPI
from db import Base,engine 
from models import usermodel,productmodel
from users import routes

Base.metadata.create_all(bind=engine)



app = FastAPI()
app.include_router(routes.prd_routes)
app.include_router(routes.user_routes)