// rest operator

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(100, 200, 300, 400, 500)) 


// object as parameter in functions.
const user = {  // object 
    username: "Mohammad Yusuf",
    courses: "B.tech CSE"
}

function displayUserDetails(anyobject){
    console.log(`Username is ${anyobject.username} and the course is ${anyobject.course}`);
}
displayUserDetails(user);


// array as parameter in functions.
const myNewArray = [200, 300, 400, 500, 600, 700, 900];

function returnSecondValue(getArray){
    return getArray[2];
}
console.log(returnSecondValue(myNewArray));