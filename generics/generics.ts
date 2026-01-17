function echo(value:any){
    return value
}

const x =echo("yash")
const y=echo(10)
console.log(x.toUpperCase())
console.log(y.toUpperCase())   // we will get error while run no error while compile time


//now we make this fuctuin generics

function echo2<T>(value :T):T{
    return value
}

const x1=echo2("yash")
x1.toUpperCase()

export{}

