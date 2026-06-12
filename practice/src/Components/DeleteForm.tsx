import { useContext, useState } from "react";
import { StudentContext } from "./StudentContext";

function DeleteForm() {
  const { students, setStudents } = useContext(StudentContext);

  const [rollNo, setRollNo] = useState(0);

  function deletePost() {
    setStudents(
      students.filter(
        (item: any) => item.roll_no !== rollNo
      )
    );
  }

  return (
    <div>
      <h2>Delete Student</h2>

      <input
        type="number"
        placeholder="Roll No"
        onChange={(e) => setRollNo(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default DeleteForm;