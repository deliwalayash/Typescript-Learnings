interface Person{
    name:string,
    age:number,
    role:"admin" | "user",
}

interface Person{
    city:string
}

interface Admin extends Person{
    permissions:string[]
}

const a1:Admin={
    name:"yash2",
    age:36,
    role:"admin",
    permissions:["read","write","edit"],
    city:"surat"
}

const u1:Person={
    name:"yash",
    age:36,
    role:"admin",
    city:'amd'
}

console.log(u1)
console.log(a1)

interface A{
    name:string
}

interface B extends A{
    age:number
}

type C ={
    name:string
}

type D = C &{
    age:number
}

type Persontype ={
    name:string,
    age:number,
    role:"admin" | "user"
}



type Employee =  Persontype &{
    salary:number
}

const e1:Employee={
    name:"yash",
    age:36,
    role:"admin",
    salary:4000
}

console.log(e1)
export{}