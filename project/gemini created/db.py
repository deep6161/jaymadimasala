from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from users.settings import settings


Base=declarative_base()

engine=create_engine(url=settings.DB_CONNECTION)

Localsession=sessionmaker(bind=engine)


def db_get():
    session= Localsession()
    try:
        yield session
    finally:
        session.close()