//This file should compute the factorial of 10 using a while loop, an if branch, and a break statement.

let num = 10;
let factorial = 1;

while(true){
    if(num === 0){
        break;
    }
    factorial *= num;
    num--;
}

console.log(factorial);
