//Parent to child

import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child setCount={setCount} />
    </div>
  );
}

export default Parent;