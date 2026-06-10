# from fastapi import FastAPI
# from pydantic import BaseModel, Field

# app = FastAPI()

# class Student(BaseModel):
#     name: str = Field(min_length=3, max_length=20)
#     age: int = Field(gt=0, lt=100)

# @app.post("/student")
# def create_student(student: Student):
#     return student
# from fastapi import FastAPI, Header

# app = FastAPI()

# @app.get("/student")
# def get_student(
#     token: str = Header()
# ):
#     return {
#         "token": token
#     }

from fastapi import FastAPI, Header
from pydantic import BaseModel
import uvicorn

app = FastAPI()

class CommonHeaders(BaseModel):
    token: str
    device: str

@app.get("/info")
def get_info(
    token: str = Header(),
    device: str = Header()
):

    headers = CommonHeaders(
        token=token,
        device=device
    )

    return headers
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)