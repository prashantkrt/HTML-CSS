//Number
a = 20;
console.log(typeof a);

//Number
let b = 2.8;
console.log(typeof b);

//boolean
flag = true;
console.log(typeof flag);
// flag= True // True is not defined error
// console.log(flag);

//string
coderName = "Prashant";
//string indices
console.log(coderName[0]);
//string length property
console.log(coderName.length)
//gives new  string
let coder = coderName + " Fullstack Developer";
console.log(coderName);
console.log(coder);
console.log(typeof coderName);

//string
let data = "a";
data = "23";
console.log(data[0]);
data = "";
console.log(data.length); // 0 
console.log(typeof data);

//undefined
let x;
let userName = undefined;
console.log(typeof x);
console.log(typeof userName);

//null
let number = null;
console.log(typeof number);

//not much used : BigInt and Symbol()

//Bigint
let bb = BigInt("1233343");
console.log(typeof bb);

// BigInt value
// A BigInt number is created by appending n to the end of an integer.
let value1 = 900719925124740998n;
console.log(typeof value1);

// add two big integers
let result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

let value2 = 900719925124740998n;
console.log(typeof value2);

//Symbols are immutable (cannot be changed) and are unique.
let s = Symbol("Hello");
console.log(typeof s);

// two symbols with the same description
let val1 = Symbol("programiz");
let val2 = Symbol("programiz");

//compare value and type
console.log(val1 === val2); // false

//object
let Student = {
  firstName: "Rohit",
  lastName: "Kumar",
  class: 10,
};

console.log(Student);
//object
console.log(typeof Student);
console.log(Student.firstName);
console.log(Student["firstName"]);

Student.firstName = "Amar";
Student.lastName = "Khanna";
console.log(Student);
