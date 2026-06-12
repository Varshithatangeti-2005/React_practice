// import Student from "./components/Students";

// function App() {
//   function receiveMessage(message: string) {
//     alert(message);
//   }

//   return (
//     <div>
//       <h1>Parent Component</h1>

//       <Student sendData={receiveMessage} />
//     </div>
//   );
// }

// export default App;-----parent to child props

















// import { useEffect, useState } from "react";


// function Counter(){
//   const[count,setCount]=useState(0);
//   function incrementCounter():void{
//     setCount(count+1);
//   }
//   useEffect(function(){
//     console.log("Count has been changed",count)
//   },[])

// return(
//   <div>
//     <button onClick={incrementCounter}>Count:{count}</button>
//   </div>
// );
// }
// export default Counter;










// import Child from "./components/Child";
// import Parent from "./components/Parent";  //child to parent


// function App(){
//   return(
//     <div>
//       <Parent/>
//     </div>
//   )
// }
// export default App;











// import Students from "./components/Students";

// function App(){
//   return(
//     <div>
//       <Students name='Dora' age={22} course="csm"/>
//       <hr></hr>
//       <Students name='Dora' age={22} course="csm"/>
//     </div>
//   )
// }

// export default App;



//Conditional rendering

// import { useState } from "react";

// function App(){
//   const[isPassed,setPassed]=useState<boolean>(true);
//   function changeResult(){
//     setPassed(!isPassed);
//   }

//   if(isPassed){
//     return(
//       <div>
//         <h1>Student Result</h1>
//         <p>Congratualtions!!!!! You have passes</p>
//         <button onClick={changeResult}>Change Result</button>
//       </div>
//     )
//   }
//   else{
//     return(
//       <div>
//         <h1>Student Result</h1>
//         <p>Sorry!!!Better luck next time....</p>
//         <button onClick={changeResult}>Change Result</button>
//       </div>
//     )
//   }
// }

// export default App;






// function App() {

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     const name = formData.get("name");
//     const email = formData.get("email");

//     console.log(name);
//     console.log(email);
//   }

//   return (
//     <form onSubmit={handleSubmit}>

//       <input
//         type="text"
//         name="name"
//         placeholder="Enter Name"
//       />

//       <br /><br />

//       <input
//         type="email"
//         name="email"
//         placeholder="Enter Email"
//       />

//       <br /><br />

//       <button type="submit">
//         Submit
//       </button>

//     </form>
//   );
// }

// export default App;

// import { useState } from "react";

// interface User {
//   id: number;
//   username: string;
//   email: string;
// }

// function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");

//   const [showForm, setShowForm] = useState(false);

//   const [mode, setMode] = useState<"create" | "edit" | "delete">("create");

//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   // CREATE BUTTON
//   function openCreate() {
//     setMode("create");
//     setUsername("");
//     setEmail("");
//     setSelectedId(null);
//     setShowForm(true);
//   }

//   // EDIT BUTTON
//   function openEdit(user: User) {
//     setMode("edit");
//     setUsername(user.username);
//     setEmail(user.email);
//     setSelectedId(user.id);
//     setShowForm(true);
//   }

//   // DELETE BUTTON
//   function openDelete(user: User) {
//     setMode("delete");
//     setUsername(user.username);
//     setEmail(user.email);
//     setSelectedId(user.id);
//     setShowForm(true);
//   }

//   // SAVE
//   function handleSubmit() {
//     if (mode === "create") {
//       const newUser: User = {
//         id: Date.now(),
//         username,
//         email,
//       };

//       setUsers([...users, newUser]);
//     }

//     if (mode === "edit") {
//       const updatedUsers = users.map((user) =>
//         user.id === selectedId
//           ? {
//               ...user,
//               username,
//               email,
//             }
//           : user
//       );

//       setUsers(updatedUsers);
//     }

//     if (mode === "delete") {
//       const filteredUsers = users.filter(
//         (user) => user.id !== selectedId
//       );

//       setUsers(filteredUsers);
//     }

//     setShowForm(false);
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>User Management</h1>

//       {/* Top Left Buttons */}

//       <button onClick={openCreate}>Create</button>

//       {/* Form */}

//       {showForm && (
//         <div
//           style={{
//             border: "1px solid black",
//             padding: "15px",
//             marginTop: "20px",
//             width: "300px",
//           }}
//         >
//           <h3>{mode.toUpperCase()} USER</h3>

//           <div>
//             <label>Username</label>
//             <br />
//             <input
//               type="text"
//               value={username}
//               disabled={mode === "delete"}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <br />

//           <div>
//             <label>Email</label>
//             <br />
//             <input
//               type="text"
//               value={email}
//               disabled={mode === "delete"}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <br />

//           <button onClick={handleSubmit}>
//             {mode === "create" && "Save"}
//             {mode === "edit" && "Update"}
//             {mode === "delete" && "Delete"}
//           </button>
//         </div>
//       )}

//       <hr />

//       <h2>User List</h2>

//       {users.map((user) => (
//         <div
//           key={user.id}
//           style={{
//             border: "1px solid gray",
//             margin: "10px",
//             padding: "10px",
//             width: "300px",
//           }}
//         >
//           <p>
//             <b>Name:</b> {user.username}
//           </p>

//           <p>
//             <b>Email:</b> {user.email}
//           </p>

//           <button onClick={() => openEdit(user)}>
//             Edit
//           </button>

//           <button
//             onClick={() => openDelete(user)}
//             style={{ marginLeft: "10px" }}
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;



// import Child from "./components/Child";
// import { UserContext } from "./components/userContext";

// function App(){
//     return(
//         <UserContext.Provider value={{username:"Dora"}}>
//             <Child/>

//         </UserContext.Provider>
//     )
// }
// export default App;

// import { useState,useEffect,useContext } from "react";

// interface studentData{
//     name:string;
//     roll_no:number
// }

// const [createUser,setUser]=useState<studentData>()



// function createPost(){
//     document.getElementById("id")?.addEventListener('click',function(){
//         setUser(createUser)
//     })

// }

// function editPost(){
//     document.getElementById("ebtn")?.addEventListener('click',function(){
//         setUser(createUser)
//     })
// }

// function deletePost(){
//     document.getElementById("dbtn")?.addEventListener('click',function(){
//         setUser(createUser);
//     })
// }
// function App(){
//     return(
//         <div>
//             <button id="btn" onClick={createPost} >Create Post</button>
//             <button id="ebtn" onClick={editPost}>Edit post</button>
//             <button id="dbtn" onClick={deletePost}></button>
//         </div>
        
//     )
// }
// export default App;

import { useState } from "react";
import { StudentContext, type StudentData } from "./Components/StudentContext";
import CreateForm from "./Components/CreateForm";
import EditForm from "./Components/EditForm";
import DeleteForm from "./Components/DeleteForm";

function App() {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [mode, setMode] = useState("");

  return (
    <StudentContext.Provider
      value={{ students, setStudents }}
    >
      <div>
        <button onClick={() => setMode("create")}>
          Create
        </button>

        <button onClick={() => setMode("edit")}>
          Edit
        </button>

        <button onClick={() => setMode("delete")}>
          Delete
        </button>

        <hr />

        {mode === "create" && <CreateForm />}

        {mode === "edit" && <EditForm />}

        {mode === "delete" && <DeleteForm />}

        <hr />

        <h2>Student List</h2>

        {students.map((item) => (
          <div key={item.roll_no}>
            <h3>{item.name}</h3>
            <p>{item.roll_no}</p>
          </div>
        ))}
      </div>
    </StudentContext.Provider>
  );
}

export default App;