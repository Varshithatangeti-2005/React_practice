from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
from typing import Optional

app = FastAPI()

# BaseModel
class Student(BaseModel):
    name: str
    age: int


# =========================
# 🔹 GET Method
# =========================
@app.get("/students/{id}")
def get_student(id: int, course: str, email: str = None):

    return {
        "method": "GET",
        "student_id": id,
        "Email": email,
        "course": course
    }


# =========================
# 🔹 POST Method
# =========================
@app.post("/students/{id}")
def create_student(id: int, email: str, course: str, student: Student):

    return {
        "method": "POST",
        "student_id": id,
        "course": course,
        "Email": email,
        "student_details": student
    }


# =========================
# 🔹 PUT Method
# =========================
@app.put("/students/{id}")
def update_student(id: int, email: str = None, course: str = None, student: Student = None):

    return {
        "method": "PUT",
        "student_id": id,
        "Email": email,
        "course": course,
        "updated_student_details": student
    }


# =========================
# 🔹 PATCH Method
# =========================
@app.patch("/students/{id}")
def patch_student(id: int, email: str = None, course: str = None):

    return {
        "method": "PATCH",
        "student_id": id,
        "Email": email,
        "course": course
    }


# =========================
# 🔹 DELETE Method
# =========================
@app.delete("/students/{id}")
def delete_student(id: int):

    return {
        "method": "DELETE",
        "student_id": id,
        "message": "Student deleted successfully"
    }


# =========================
# 🔹 Main Function
# =========================
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)