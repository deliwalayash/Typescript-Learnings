interface User {
    name:string,
    age:number,
    city:string
}

const list :User []=[{
    name:"yash",
    age:35,
    city:"surat"
},{
    name:"malav",
    age:5,
    city:"ahd"
}]


list.push({name:"vihaan",age:10,city:"surat"},{name:"foram",age:33,city:"skd"})
list.forEach((curEle)=>{
        console.log(curEle.name,curEle.age,curEle.city)
})

interface UserBase{
    name:string,
    email:string
}

interface Admin extends UserBase{
    permissions:string[]

}

interface Customer extends UserBase{
    purchaseCount:number
}

const admin1:Admin={
    name:"yash",
    email:"yash@gmail.com",
    permissions:["read","write","delete"]
}

const customer1:Customer ={
    name:"mala",
    email:"malav @gmail.com",
    purchaseCount:5
}

function displayUser(user:UserBase){
    console.log(user.name,user.email)
}

displayUser(admin1)
displayUser(customer1)




export{}