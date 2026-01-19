type StudentDraft = {
  id?: number
  name?: string
  email?: string
  course?: string
}

type StudentFinal=Required<StudentDraft> 

const stu1 = (data :StudentFinal)=>{
    console.log(data)
}

stu1({id:1,name:"yash",email:"aa",course:"qq"})
export{}