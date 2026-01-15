function identity<T>(value :T):T{
    console.log("Value :",value)
    return value
}

const num=identity(10)
const text = identity("yash")
const user =identity( {
    name:"yash",
    age:36
})

let value=identity(1000)


console.log(num)
console.log(text)
console.log(user)


function echo<T>(value:T):T{
    return value
}

const x = echo(20)
x.toUpperCase()
console.log(x)

