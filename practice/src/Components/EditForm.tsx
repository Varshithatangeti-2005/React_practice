import { useContext, useState } from "react";
import { StudentContext } from "./StudentContext";

function EditForm() {
  const { students, setStudents } = useContext(StudentContext);

  const [rollNo, setRollNo] = useState(0);
  const [name, setName] = useState("");

  function editPost() {
    const student = students.find(
      (item: any) => item.roll_no === rollNo
    );

    if (student) {
      student.name = name;
      setStudents([...students]);
    }
  }

  return (
    <div>
      <h2>Edit Student</h2>

      <input
        type="number"
        placeholder="Roll No"
        onChange={(e) => setRollNo(Number(e.target.value))}
      />

      <br /><br />

      <input
        type="text"
        placeholder="New Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={editPost}>Update</button>
    </div>
  );
}

export default EditForm;