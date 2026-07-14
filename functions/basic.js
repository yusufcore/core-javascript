function sayMyName(){
    console.log("My name is John Doe");
}
sayMyName();

function addTwoNumbers(number1, number2){  // number1 and number2 are called parameters.
    let result = number1 + number2;
    return result;
}
const result = addTwoNumbers(19, 20);
console.log("Result: ", result);
// after return statement, the function will stop executing and return the value to the caller. Any code after the return statement will not be executed.\

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("John Doe"));

const greet = function(){  // anonymous function
    return "Yusuf";
};
console.log(greet());