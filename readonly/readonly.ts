type Student = {
  id: number
  name: string
  course: string
}

const student:Readonly <Student> = {
  id: 1,
  name: "yash",
  course: "fsd"
}

student.name = "rahul"   
console.log(student)
export{}