import Practice from "./components/practice";
import Users from "./components/Students";


function App(){
  return(
    <div>
      <Users/>
    </div>
  );
}
export default App;


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
