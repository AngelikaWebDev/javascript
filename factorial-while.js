//Este archivo debe calcular el factorial de 10 utilizando un solo bucle while

let num = 10;
let factorial = 1;

while(num > 0){
    factorial *= num;
    num--;
}

console.log(factorial);