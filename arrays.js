// ARRAY
const products = ["maruchan", "dragoncitos", "café"];
console.log(products);

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);

const prodcuts2= ["maruchan", 20.0,"dragoncitos",2.0];
console.log(products);
const matrix= [[0,1],[2,3],[4,5]];
console.log(matrix);
console.log(matrix[2][1]);
console.log(matrix[1][0]);

//Bucles
//For
for(let i=0; i<=2; i++){
    console.log(products[i]);
}
console.log(products.length);

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

//while 
//Do while
/*
let count = 0;

while(count <=2) {
    console.log(count);
    count++;
}
    do {
        count++
        console.log(`count is: ${count}`)
}  while(count <=100)
*/
//forEach

function foo(x){
    console.log(`El item actual es:${x}`);
}
products.forEach((element,index)=>console.log(element,index));
products.forEach(e => foo(e));
