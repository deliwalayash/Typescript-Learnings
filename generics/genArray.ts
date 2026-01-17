function echo<T>(value:T[]):T{
    return value[0]
}

const x=echo([1,2,3,4,5])
const y=echo(["a","b","c"])
console.log(y.toUpperCase())
console.log(x)

function getlength<T extends {length:number}>(value:T):number{
    return value.length
}

const x2=getlength("yash")
const y2=getlength([1,2,3,4])


export{}