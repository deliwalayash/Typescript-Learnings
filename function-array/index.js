var ans = function add(a, b) {
    return a + b;
};
console.log(ans(5, 10));
console.log(ans(5, 20));
function add2(a, b) {
    return a + b;
}
console.log(add2("y", "a"));
var arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);
var user = {
    name: "yash",
    age: 35,
    isDeveloper: true
};
console.log(user);
var user2;
var user3 = {
    name: "yash",
    age: 35,
    isDeveloper: true,
    salary: 4,
    role: "user"
};
var user4 = {
    name: "suyesh",
    isDeveloper: false,
    salary: "5lakh",
    role: "developer"
};
console.log(user3);
console.log(user4);
function data(user) {
    return user.name + " " + (user.age ? user.age : "") + " " + user.role + " " + user.salary;
}
var user5 = {
    name: "yash",
    age: 35,
    role: "user",
    salary: 5,
    isDeveloper: false
};
var ans5 = data(user5);
console.log(ans5);
