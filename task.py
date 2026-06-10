# from fastapi import FastAPI
# from pydantic import BaseModel

# app=FastAPI()
# class student(BaseModel):
#     name:str
#     roll_no:int

# @app.get("/student")
# def get_student(stu:student):
#     return stu



# from fastapi import FastAPI,Request
# import time
# app=FastAPI()
# @app.middleware('http')
# async def my_middleware(request:Request,call_next):
#     print("Before request")
#     start_time=time.time()
#     response=await call_next(request)
#     process_time=time.time()-start_time
#     print("Requst time",process_time)
#     return response
# @app.get("/")
# async def home():
#     return {"message":"------"}


# from fastapi import FastAPI
# from pydantic import BaseModel,Field

# class employee(BaseModel):
#     name:str=Field(min==2,max=10,description="Enter a valid string")
#     phone_number:int=Field(max=10,description="Enter the valid number")

# app=FastAPI()
# @app.post("/emp{id}")
# def post_method(id:int,name:str,phone_number:int):
#     return{
#         "emp_name":name,
#         "emp_phone":phone_number
#     }


from fastapi import FastAPI
from pydantic import BaseModel

class employee(BaseModel):
    em_name:str
    em_id:int
    em_ph:int

app=FastAPI()
@app.get("/emp/{id}")
def get_emp(empl:employee):
    return {
        "method":"Get",
        "response":empl,
        "status code":"200 ok"
    }
@app.post("/emp/{id}")
def post_emp(name:str,id:int,ph:int):
    return{
        "Method":"Post",
        "emp_phone":ph,
        "emp_id":id,
        "emp_name":name,
        "status code":"200 ok",
        "message":"created successfully"
    }
@app.patch("/emp/{id}")
def post_emp(id:int,ph:int):
    return{
        "Method":"Patch",
        "emp_phone":ph,
        "emp_id":id,
        "status code":"200 ok",
        "message":"updated partially"
    }

@app.put("/emp/{id}")
def post_emp(name:str,id:int,ph:int):
    return{
        "Method":"put",
        "emp_phone":ph,
        "emp_id":id,
        "emp_name":name,
        "status code":"200 ok",
        "message":"updated successfully"
    }
@app.delete("/emp/{id}")
def post_emp():
    return{
        "Method":"delete",
        "status code":"200 ok",
        "message":"Deleted successfully"
    }

