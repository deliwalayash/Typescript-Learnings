function printLength(value) {
    if (typeof value == "string") {
        console.log(value.length);
    }
    else
        (console.log(value.toString().length));
}
printLength(222);
printLength("i am yash deliwala");
