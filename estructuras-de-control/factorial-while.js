//This file should calculate the factorial of 10 using a single while loop

let num = 10;
let factorial = 1;

while(num > 0){
    factorial *= num;
    num--;
}

console.log(factorial);
