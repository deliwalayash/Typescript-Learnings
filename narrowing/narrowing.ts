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

type Circle = {
  kind: "circle"
  radius: number
}

type Square = {
  kind: "square"
  size: number
}

type Shape = Circle | Square

function area(shape: Shape) {
   if("radius" in shape){
    console.log("Area:",3.14 * shape.radius * shape.radius)
   }
   else{
    console.log("Area:",shape.size*2)
   }
}

area({kind:"circle",radius:5})
