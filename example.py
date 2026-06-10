from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
from typing import Optional

app = FastAPI()

# =========================
# 📦 BaseModel
# =========================
class Student(BaseModel):
    name: str
    age: int


# =========================
# 🧠 Fake Database
# =========================
students_db = {}


# =========================
# 🔹 GET Method
# =========================
@app.get("/students/{id}")
def get_student(id: int):

    if id not in students_db:
        return {"message": "Student not found"}

    return {
        "method": "GET",
        "student_data": students_db[id]
    }


# =========================
# 🔹 POST Method
# =========================Header
@app.post("/students/{id}")
def create_student(id: int, email: str, course: str, student: Student):

    students_db[id] = {
        "email": email,
        "course": course,
        "student_details": student.dict()
    }

    return {
        "method": "POST",
        "message": "Student created successfully",
        "data": students_db[id]
    }


# =========================
# 🔹 PUT Method
# =========================
@app.put("/students/{id}")
def update_student(id: int, email: str, course: str, student: Student):

    if id not in students_db:
        return {"message": "Student not found"}

    students_db[id] = {
        "email": email,
        "course": course,
        "student_details": student.dict()
    }

    return {
        "method": "PUT",
        "message": "Student fully updated",
        "updated_data": students_db[id]
    }


# =========================
# 🔹 PATCH Method
# =========================
@app.patch("/students/{id}")
def patch_student(id: int, email: Optional[str] = None, course: Optional[str] = None):

    if id not in students_db:
        return {"message": "Student not found"}

    if email is not None:
        students_db[id]["email"] = email

    if course is not None:
        students_db[id]["course"] = course

    return {
        "method": "PATCH",
        "message": "Student partially updated",
        "updated_data": students_db[id]
    }


# =========================
# 🔹 DELETE Method
# =========================
@app.delete("/students/{id}")
def delete_student(id: int):

    if id not in students_db:
        return {"message": "Student not found"}

    deleted_student = students_db.pop(id)

    return {
        "method": "DELETE",
        "message": "Student deleted successfully",
        "deleted_data": deleted_student
    }


# =========================
# 🚀 Main Function
# =========================
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)