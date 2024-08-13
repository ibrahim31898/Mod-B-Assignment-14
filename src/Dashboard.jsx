import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [isToogle, setIsToogle] = useState(false)
    const [count, setCount] = useState(0);

    const func = () => {
        console.log("useeffect call...");
    };

    useEffect(()=>{
        func()
    },[isToogle]);

  return (
    <div>
      <h1>Dashboard Page {count}</h1>
      <p>Toggle state: {isToogle? "On" : "Off"}</p>
      <button onClick={()=>setIsToogle(!isToogle)}>Toggle {isToogle? "On" : "Off"}</button>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Dashboard