from fastapi import FastAPI
import uvicorn
from typing import Optional

app = FastAPI()

# =========================
# 🔹 GET - PATH PARAM ONLY
# =========================
@app.get("/students/{id}")
def get_by_path(id: int):
    return {
        "method": "GET",
        "type": "path_param",
        "student_id": id
    }


# =========================
# 🔹 GET - QUERY PARAM ONLY
# =========================
@app.get("/students")
def get_by_query(course: Optional[str] = None, email: Optional[str] = None):
    return {
        "method": "GET",
        "type": "query_param",
        "course": course,
        "email": email
    }


# =========================
# 🔹 POST - PATH PARAM ONLY
# =========================
@app.post("/students/{id}")
def post_path(id: int):
    return {
        "method": "POST",
        "type": "path_param",
        "student_id": id
    }


# =========================
# 🔹 POST - QUERY PARAM ONLY
# =========================
@app.post("/students")
def post_query(
    name: str,
    age: int,
    email: Optional[str] = None,
    course: Optional[str] = None
):
    return {
        "method": "POST",
        "type": "query_param",
        "name": name,
        "age": age,
        "email": email,
        "course": course
    }


# =========================
# 🔹 POST - PATH + QUERY PARAM (NO BODY)
# =========================
@app.post("/students/{id}/details")
def post_path_query(
    id: int,
    course: Optional[str] = None,
    email: Optional[str] = None
):
    return {
        "method": "POST",
        "type": "path + query",
        "student_id": id,
        "course": course,
        "email": email
    }


# =========================
# 🚀 RUN SERVER
# =========================
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)  