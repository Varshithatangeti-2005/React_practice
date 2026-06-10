#request body validation

# from fastapi import FastAPI
# from pydantic import BaseModel, Field

# app = FastAPI()

# # 🧾 1. Validation Model
# class Product(BaseModel):
#     name: str = Field(..., min_length=3)
#     price: int = Field(..., gt=0)

# # 📦 2. Dummy Database
# products = []

# # ➕ 3. Create Product API (POST)
# @app.post("/products")
# def create_product(product: Product):
#     products.append(product)
#     return {
#         "message": "Product created successfully",
#         "data": product
#     }

# # 📥 4. Get All Products API (GET)
# @app.get("/products")
# def get_products():
#     return products



#field validation
# from fastapi import FastAPI
# from pydantic import BaseModel, Field

# app = FastAPI()

# # 🧾 1. Product Model with Validators
# class Product(BaseModel):
#     name: str = Field(..., min_length=3, max_length=50)
#     price: int = Field(..., gt=0, lt=1000000)

# # 📦 2. Dummy Database
# products = []

# # ➕ 3. Create Product (POST)
# @app.post("/products")
# def create_product(product: Product):
#     products.append(product)
#     return {
#         "message": "Product created successfully",
#         "data": product
#     }

# # 📥 4. Get All Products (GET)
# @app.get("/products")
# def get_products():
#     return products



#model_validator
# from pydantic import BaseModel, model_validator

# class User(BaseModel):
#     username: str
#     email: str

#     @model_validator(mode="after")
#     def check_user(cls, values):
#         if values.username == values.email:
#             raise ValueError("Username and email cannot be same")
#         return values

# from fastapi import FastAPI, Request
# import time



#request logging middleware
# app = FastAPI()
# @app.middleware('http')
# async def request_logging_middleware(request:Request,call_next):
#     print("before request")
#     start_time=time.time()
#     print(f"Incoming request{request.method}{request.url}")
#     response=await call_next(request)
#     process_time=start_time-time.time()
#     print(f"Status code:{response.status_code}")
#     print(f"Process time in seconds: {process_time:.4f}")
#     return response 

# @app.get("/students")
# def getting_students():
#     return{"message":"Hello varshitha"}   


# @app.post("/students")
# def posting_students(name:str,phone:int):
#     return{
#         "name":name,
#         "phone":phone
#     }



# JWT TOKEN GENERATION
# from fastapi import FastAPI
# import jwt
# import datetime

# app = FastAPI()

# SECRET = "mysecret"

# @app.post("/login")
# def login():
#     payload = {
#         "user": "dora",
#         "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
#     }

#     token = jwt.encode(payload, SECRET, algorithm="HS256")
#     return {"token": token}



#token generation and validating
from fastapi import FastAPI, HTTPException
import jwt
import datetime
app = FastAPI()
SECRET = "mysecret"
@app.post("/login")
def login():
    payload = {
        "user": "dora",
        "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    }

    token = jwt.encode(payload, SECRET, algorithm="HS256")
    return {"token": token}
def verify_token(token: str):
    try:
        decoded = jwt.decode(token, SECRET, algorithms=["HS256"])
        return decoded
    except:
        raise HTTPException(status_code=401, detail="Invalid token")
@app.get("/profile")
def profile(token: str):
    user_data = verify_token(token)
    return {"message": "Welcome", "user": user_data}




# from fastapi import FastAPI, Request
# from fastapi.responses import JSONResponse

# app = FastAPI()

# # Authentication Middleware
# @app.middleware("http")
# async def auth_middleware(request: Request, call_next):

#     token = request.headers.get("Authorization")

#     # Token check
#     if token != "mysecrettoken":
#         return JSONResponse(
#             status_code=401,
#             content={"message": "Unauthorized User"}
#         )

#     # Continue to API
#     response = await call_next(request)
#     return response


# @app.get("/profile")
# def profile():
#     return {"message": "Welcome User"}


# #Request ID middleware
# from fastapi import FastAPI, Request
# import uuid

# app = FastAPI()

# @app.middleware("http")
# async def request_id_middleware(request: Request, call_next):

#     request_id = str(uuid.uuid4())  # unique ID generate

#     # attach to request state
#     request.state.request_id = request_id

#     response = await call_next(request)

#     # add to response header
#     response.headers["X-Request-ID"] = request_id

#     return response



#Rotating logs
import logging
from logging.handlers import RotatingFileHandler

logger = logging.getLogger("my_logger")
logger.setLevel(logging.INFO)

handler = RotatingFileHandler(
    "app.log",
    maxBytes=2000,
    backupCount=3
)

logger.addHandler(handler)

logger.info("Application Started")