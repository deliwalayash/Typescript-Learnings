function identity(value) {
    console.log("Value :", value);
    return value;
}
var num = identity(10);
var text = identity("yash");
var user = identity({
    name: "yash",
    age: 36
});
var value = identity(1000);
console.log(num);
console.log(text);
console.log(user);
function echo(value) {
    return value;
}
var x = echo("yash");
x.toUpperCase();
console.log(x);
