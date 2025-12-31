interface User {
    name:string,
    age:number
}

const user2:User={
    name:"yash",
    age:35
}

const user5:User={
    name:"malav",
    age:5,
}


interface Product {
    id:number,
    name:string,
    price:number,
    instock:boolean
}


const p1:Product ={
    id:1,
    name:"soap",
    price:20,
    instock:true
}

const p2:Product ={
    id:2,
    name:"paste",
    price:30,
    instock:false
}


interface Profile {
    username:string,
    bio?:string,
    age?:number
}


const yash:Profile ={
    username:"yash",
    bio:"developer",
    age:34
}

const malav:Profile ={
    username:"deliwala"
}

interface OrderStatus {
    oderId:number,
    status :"pending" | "shipped" | "delivered"
    amount:number
}

const p4:OrderStatus = {
    oderId:1,
    status:"pending",
    amount:50
}

console.log(p1,p2)
console.log(user2)
console.log(yash,malav)
export{}

