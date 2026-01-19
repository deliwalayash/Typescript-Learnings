type Student = {
  id: number
  name: string
  email: string
  course: string
}


type StudentPreview =Pick<Student,"name" | "course">

const saveStudent=(data:StudentPreview)=>{
    console.log(data)
}

saveStudent({name:"yash",course:"hello"})



export{}

