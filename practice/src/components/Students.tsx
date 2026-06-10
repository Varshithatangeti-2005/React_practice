// interface StudentProps {
//     name: string;
//     age: number;
//     course: string;
// }

// function Students({ name, age, course }: StudentProps) {
//     return (
//         <div>
//             <h1>Student details</h1>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Course: {course}</p>
//         </div>
//     );
// }

// export default Students;




import { useState,useEffect } from "react";

function Users(){
    const [users,setUsers]=useState<any[]>([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
    },[users])

    return(
        <div>
            <h2>Users List</h2>
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}

export default Users;





