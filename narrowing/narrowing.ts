function printLength(value: string | number) {
  if(typeof value == "string"){
    console.log(value.length)
  }
  else(console.log(value.toString().length))
}

type Admin = {
  role: "admin"
  permissions: string[]
}

type User = {
  role: "user"
  email: string
}

function printPerson(person: Admin | User) {
    if("permissions" in person){
        console.log(person.permissions)
    }
    else{
        console.log(person.email)
    }

}


printLength(222)
printLength("i am yash deliwala")
