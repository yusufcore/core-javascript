// 1) Number
let n = 42;
let pi = 3.14;
console.log(pi, n);

// 2) String
let s = "Welcome to Javascript";
console.log(s)

// 3) Boolean
let bool = true;
console.log(bool)

// 4) Undefined
let notAssigned;  // variables that have no values assigned.
console.log(notAssigned);

// 5) Null
let empty = null;   // intentional absence of any value.
console.log(empty);

// 6) Symbol
let sym = Symbol('unique');   // represents unique and immutable values.
console.log(sym);

// 7) BigInt
let bigNumber = 12345678901234567890n;  
console.log(bigNumber)

// 1-7 are Primitive Data Types.

// 8) Object  --->  represents key-value pairs.
let obj = {
    name: "Mohammad Yusuf",
    age: 20
};
console.log(obj);
 
// 9) Array  ---> an ordered list of values.
let arr = ["red","orange","green","purple"];
console.log(arr);

// 10) Function   ---> reusable block of code.
function follow(){
    console.log("May Allah Bless Your Journey");
}
follow()  // calling the Function.


console.log(null === undefined);