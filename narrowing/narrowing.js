function printLength(value) {
    if (typeof value == "string") {
        console.log(value.length);
    }
    else
        (console.log(value.toString().length));
}
function printPerson(person) {
    if ("permissions" in person) {
        console.log(person.permissions);
    }
    else {
        console.log(person.email);
    }
}
printLength(222);
printLength("i am yash deliwala");
function area(shape) {
    if ("radius" in shape) {
        console.log("Area:", 3.14 * shape.radius * shape.radius);
    }
    else {
        console.log("Area:", shape.size * 2);
    }
}
area({ kind: "circle", radius: 5 });
