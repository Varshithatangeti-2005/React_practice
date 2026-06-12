//child to parent

// interface Props{
//     setCount:React.Dispatch<React.SetStateAction<number>>;

// }

// function Child({setCount}:Props){
//     return(
//        <button onClick={() => setCount((prev) => prev + 1)}>
//       Increment
//     </button>  
//     )
// }
// export default Child;


// Child.tsx

import { useContext } from "react";
import { UserContext } from "./userContext";

function Child() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {user.username}</h2>
    </div>
  );
}

export default Child;