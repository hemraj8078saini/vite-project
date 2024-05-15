import  { useEffect, useState } from 'react'

const UseEffect = () => {
   const[name,setName]=useState("hemraj")
    useEffect(()=>{
        alert("hello");
        
    },[])
    useEffect(()=>{
        alert("name")
    },[name])
  
  return (
    <div>
    <button onClick={(()=>{setName("hemraj saini")})}>change name</button>
      {name}
    </div>
  )
}

export default UseEffect
