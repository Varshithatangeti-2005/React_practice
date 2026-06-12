import { useContext, useState } from "react";
import { StudentContext } from "./StudentContext";

function CreateForm() {
  const { students, setStudents } = useContext(StudentContext);

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState(0);

  function createPost() {
    const newStudent = {
      name: name,
      roll_no: rollNo,
    };

    setStudents([...students, newStudent]);
  }

  return (
    <div>
      <h2>Create Student</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Roll No"
        onChange={(e) => setRollNo(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={createPost}>Submit</button>
    </div>
  );
}

export default CreateForm;