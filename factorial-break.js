//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

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