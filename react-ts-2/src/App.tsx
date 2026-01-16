import React, { useState } from 'react'
import StudentPage from './pages/StudentPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import type { Student } from './types/Students'
import ViewStudents from './pages/ViewStudents'
import EditForm from './pages/EditForm'



const App = () => {
  const [students,setStudents]=useState<Student[]>([])
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentPage students={students} setStudents={setStudents}></StudentPage>}></Route>
        <Route path='/view' element={<ViewStudents students={students} setStudents={setStudents}></ViewStudents>}></Route>
        <Route path='/edit' element={<EditForm></EditForm>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
