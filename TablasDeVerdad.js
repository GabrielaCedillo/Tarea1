//Compuerta AND
/* 
0	|	0	|	0  | false
0	|	1	|	0  | false
1	|	0	|	0  | false
1   |	1	|	1  | true
*/
const tablaAnd = [
    { a: 2 > 8 && 5 === 3, b: 7 < 4 && 2 === 9 },   //false && false = false
    { a: 10 < 3 && false, b: 100 === 100 && 50 > 10 },       //false && true = false
    { a: 4 <= 4 && 20 > 10, b: 8 < 2 && "a" === "b" },   //true && false = false
    { a: "hola".length === 4 && 15 !== 20, b: 9 > 3 && true }    //true && true = true
];

console.log("Tabla AND");
let and1 = tablaAnd[0].a && tablaAnd[0].b;
console.log("false && false = " + and1);

let and2 = tablaAnd[1].a && tablaAnd[1].b;
console.log("false && true = " + and2);

let and3 = tablaAnd[2].a && tablaAnd[2].b;
console.log("true && false = " + and3);

let and4 = tablaAnd[3].a && tablaAnd[3].b;
console.log("true && true = " + and4 + "\n\n");


//Compuerta OR
/* 
0	|	0	|	0  | false
0	|	1	|	1  | true
1	|	0	|	1  | true
1   |	1	|	1  | true
*/
console.log("Tabla del operador OR");
const tablaOr = [
    { a: 2>5 || 4==7, b: 8<3 || 9==11},   //false || false = false
    { a: 1>5 || false, b: 7 >= 3},           //false || true = true
    { a: 9>=9 || 2>10, b: 5<1 || 3==8},   //true || false = true
    { a: 4<10 || 2==3, b: "hola"=="hola" || 100!=200}    //true || true = true
];

let or1 = tablaOr[0].a || tablaOr[0].b;
console.log("false || false = " + or1);

let or2 = tablaOr[1].a || tablaOr[1].b;
console.log("false || true = " + or2);

let or3 = tablaOr[2].a || tablaOr[2].b;
console.log("true || false = " + or3);

let or4 = tablaOr[3].a || tablaOr[3].b;
console.log("true || true = " + or4);
