type Student = {
  id: number
  name: string
  email: string
  course: string
}
const updateStudent = (data: Student) => {
  console.log(data)
}

updateStudent({ name: "yash", id: 3, email: "yash@gmail.com", course: "fsd" })
updateStudent({name:"aaa",id:2,email:"aaa",course:"ddd"})

const upDatetudent2 = (data:Partial<Student>)=>{
    console.log(data)
}

upDatetudent2({name:"hello"})

