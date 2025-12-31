const ans=function add(a:number,b:number):number{
    return a+b
}
console.log(ans(5,10))
console.log(ans(5,20))


function add2(a:string,b:string):string{
    return a+b
}

console.log(add2("y","a"))

const arr:number []=[1,2,3,4,5]
arr.push(6)
console.log(arr)


let user:{
    name:string,
    age:number,
    isDeveloper:boolean
}={
    name:"yash",
    age:35,
    isDeveloper:true
}

console.log(user)

let user2:{
    name:string,
    age:35,
    isDeveloper:boolean
}

type User={
    name:string,
    age?:number,
    isDeveloper:boolean
    salary?:string | number
    role:"user" | "developer"
    
}

const user3:User={
    name:"yash",
    age:35,
    isDeveloper:true,
    salary:4,
    role:"user"
}

const user4:User={
    name:"suyesh",
    isDeveloper:false,
    salary:"5lakh",
    role:"developer"
}
console.log(user3)
console.log(user4)

function data(user:User):string{
    return user.name+ " " + (user.age? user.age : "") + " " + user.role+ " " + user.salary
}

const user5:User={
    name:"yash",
    age:35,
    role:"user",
    salary:5,
    isDeveloper:false
}

const ans5=data(user5)
console.log(ans5)

export {}