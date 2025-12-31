"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list = [{
        name: "yash",
        age: 35,
        city: "surat"
    }, {
        name: "malav",
        age: 5,
        city: "ahd"
    }];
list.push({ name: "vihaan", age: 10, city: "surat" }, { name: "foram", age: 33, city: "skd" });
list.forEach(function (curEle) {
    console.log(curEle.name, curEle.age, curEle.city);
});
var admin1 = {
    name: "yash",
    email: "yash@gmail.com",
    permissions: ["read", "write", "delete"]
};
var customer1 = {
    name: "mala",
    email: "malav @gmail.com",
    purchaseCount: 5
};
function displayUser(user) {
    console.log(user.name, user.email);
}
displayUser(admin1);
displayUser(customer1);
