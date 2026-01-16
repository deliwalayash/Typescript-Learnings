import React, { useState } from 'react'

import  type {Student}  from '../types/Students'
import { useNavigate } from 'react-router-dom'
type StudentForm =Omit<Student,"id">

type Props ={
  students:Student[],
  setStudents:React.Dispatch<React.SetStateAction<Student[]>>
}

const StudentPage = ({students,setStudents}:Props) => {

    const [stu,setStu]=useState<StudentForm>({
    name:"",
    email:"",
    course:"",
})

const navigate=useNavigate()
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    setStu({...stu,[e.target.id]:e.target.value})
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const stuObj={
        id:Date.now(),
        ...stu
    }

    setStudents([...students,stuObj])
    navigate('/view')
}

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' onChange={handleChange} value={stu.name}/>
            <br /><br />
            <label htmlFor="email">Email</label>
            <input type="text" id='email' onChange={handleChange} value={stu.email}/>
            <br /><br />
            <label htmlFor="course">Course</label>
          <select name="course" id="course" onChange={handleChange}>
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

export default StudentPage
