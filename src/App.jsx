import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './UseEffect'
import comps from './comps'

function App() {
  // const [count, setCount] = useState(0)
  // const[name,setname]=useState("hemraj");
  useEffect(()=>{
    alert("this is useEffect");
    console.log('hello');
  },[])

  

  return (
    <>
      
      <comps/>
      
    </>
  )
}

export default App
