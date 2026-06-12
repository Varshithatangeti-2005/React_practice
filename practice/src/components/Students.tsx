interface StudentProps {
    name: string;
    age: number;
    course: string;
}

function Students  (props:StudentProps) {
    return (
        <div>
            {/* <h1>Student details</h1> */}
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}

export default Students;




// import { useState,useEffect } from "react";

// function Users(){
//     const [users,setUsers]=useState<any[]>([]);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res)=>res.json())
//         .then((data)=>setUsers(data))
//     },[users])

//     return(
//         <div>
//             <h2>Users List</h2>
//             {users.map((user) => (
//                 <p key={user.id}>{user.name}</p>
//             ))}
//         </div>
//     )
// }

// export default Users;

// interface StudentProps {
//   sendData: (message: string) => void;
// }

// function Student({ sendData }: StudentProps) {
//   function handleClick() {
//     sendData("Hello Parent! I am Child Component.");
//   }

//   return (
//     <div>
//       <h2>Child Component</h2>

//       <button onClick={handleClick}>
//         Send Data to Parent
//       </button>
//     </div>
//   );
// }

// export default Student;



