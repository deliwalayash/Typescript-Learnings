import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Student } from '../types/Students'
type StudentForm =Omit<Student,"id">

type Props ={
  students:Student[],
  setStudents:React.Dispatch<React.SetStateAction<Student[]>>
}

const EditForm = ({students,setStudents}:Props) => {

  const navigate=useNavigate()
  const {id} =useParams()
  const  selectedStudent=students.find((stu)=>stu.id===Number(id))

  console.log(selectedStudent);
  const [stu,setStu]=useState<StudentForm>({
      name:"",
      email:"",
      course:"",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
      setStu({...stu,[e.target.id]:e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      const updatedStudents=students.map((curEle)=>{
        return curEle.id ==Number(id) ? {...curEle,...stu} :curEle
      })

      setStudents(updatedStudents)
      navigate('/view')
  } 

  useEffect(()=>{
      if(selectedStudent){
        setStu({name:selectedStudent.name,email:selectedStudent.email,course:selectedStudent.course})
      }
  },[selectedStudent])

 
  return (
    <div>
      <h1>Edit Student</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' onChange={handleChange} value={stu.name}/>
            <br /><br />
            <label htmlFor="email">Email</label>
            <input type="text" id='email' onChange={handleChange} value={stu.email}/>
            <br /><br />
            <label htmlFor="course">Course</label>
          <select name="course" id="course" onChange={handleChange} value={stu.course}>
            <option value="">Please Select Course</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
          </select>
          <br /><br />
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default EditForm
