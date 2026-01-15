import React, { useState } from 'react'
import StudentPage from './pages/StudentPage'


  type Userprops = {
    name:string
  }

  function Greetings({name}:Userprops){
    return <h2>{name}</h2>
  }
const App = () => {

  const[count,setCount]=useState<number>(0)
  return (
    <div>
      <Greetings name={"yash"}></Greetings>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>ADD</button>
      <StudentPage></StudentPage>
      
    </div>
  )
}

export default App
