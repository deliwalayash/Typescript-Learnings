import React from 'react'
import type { Student } from '../types/Students'
import { useNavigate } from 'react-router-dom';

type Props ={
  students:Student[],
  setStudents:React.Dispatch<React.SetStateAction<Student[]>>
}

const ViewStudents = ({students,setStudents} :Props) => {
    const navigate=useNavigate()
    const handleDelete = (id:number)=>{
        const filtered=students.filter((stu)=>stu.id!==id)
        setStudents(filtered)   
    } 
                        
  return (
    <div>
        <h2>Students List</h2>

      {students.map((stu) => (
        <div key={stu.id}>
          <p>{stu.name}</p>
          <p>{stu.email}</p>
          <p>{stu.course}</p>
          <button onClick={()=>handleDelete(stu.id)}>Delete</button>
          <button onClick={()=>{navigate(`/edit/${stu.id}`)}}>Edit</button>
          <hr />
        </div>
      ))}

      <button onClick={()=>{navigate('/')}}>Back</button>
      
    </div>
  )
}

export default ViewStudents
