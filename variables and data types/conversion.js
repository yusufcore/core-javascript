let  res = 5 + "5";
console.log(res);   // performs string concatenation.

let res1 = true + 1;
console.log(res1); // true --> 1 and false --> 2.

let res2 = (5 == "5");
console.log(res2);  // converts "5" into a number and then compares so the answer is true.

let res3 = Boolean("")
let res4 = Boolean("Hello")
console.log(res3)  // returns false;
console.log(res4)


// Explicit Type Conversion
let n = 123;
let s1 = String(n);
let s2 = n.toString();  // conversion to String
console.log(s1)
console.log(s2)

let s = "123"
let p = Number(s);  // String to Number.
let s5 = "12.34"
let n1 = parseFloat(s5)
console.log(n)
console.log(n1)

let str = "Hello"
let b1 = Boolean(str)
let emptystr = "";
let b2 = Boolean(emptystr)
console.log(b1)
console.log(b2)