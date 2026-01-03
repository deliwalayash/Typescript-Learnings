import React, { useEffect, useState } from 'react'


interface Userprops {
name:string,
age?:number
}

interface User {
  name:string,
  age:number
}

interface Apiuser{
  id:number,
  name:string,
  email:string
}


const App = ({name,age}:Userprops) => {

  const [count,setCount]=useState<number>(0)
  const [count2,setCount2]=useState<string>("aaa")
  const [user,setUser]=useState<User | null>()

  const [user2,setUser2]=useState<Apiuser[]>([])

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((data:Apiuser[])=>{setUser2(data)})
  },[])
  return (

    <div>
      <h1>hello react ,how r u?</h1>
      <h1>{count}</h1>
      {user && <h2>{user.name}</h2>}
      <h2></h2>
      <h1>{count2}</h1>
      <button onClick={()=>{setCount(count+1)}}>ADD</button>
      <button onClick={()=>{setCount2("bbb")}}>ADD 2</button>
      <h1>{name}</h1>
      <h1>{age}</h1>
      {user2 && user2.map((curEle)=>{
        return(
          <div key={curEle.id}>
            <h1>{curEle.name}</h1>
            <h2>{curEle.email}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default App
