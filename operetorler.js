/*
let val;
const a=10;
const b=5;
const c=5;
let   d=3; 


val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;

val = d++;
val = ++d;
val = d--;
val = --d;

val = a;
val +=a;
val -=a;
val *=a;
val /=a;
val %=a;

val = a==b;
val = b==c;
val = b===c;
val = 5 === '5';
val = a!=b;
val = a!==b;
val = a > b;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b;



val = (a>b) && (a>c) 
val = (a>b) || (a>c) 
val = !(a>b) 


console.log(val);
console.log(typeof val);



// let IndexCan;
// let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.70;
const heigtAda = 1.50;

let IndexAda = (kgAda) / (heigtAda * heigtAda);
let IndexCan = (kgCan) / (heigtCan * heigtCan);

console.log(IndexCan.toFixed(2), IndexAda.toFixed(2));

console.log(typeof IndexCan);
console.log(typeof IndexAda);

let adaHigherIndex = IndexAda > IndexCan;
let canHigherIndex = IndexCan > IndexAda;

console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : " + adaHigherIndex);

console.log("Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : " + canHigherIndex);

let AdaZayif = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5) && (IndexAda <= 24.9);
let AdaKilolu = (IndexAda >= 25) && (IndexAda <= 29.9);
let AdaSisman = (IndexAda >= 30) && (IndexAda <= 34.9);

console.log("Ada zayıf :" + AdaZayif);
console.log("Ada'nın kilosu normal :" + AdaNormal);
console.log("Ada kilolu mu :" + AdaKilolu);
console.log("Ada şişman mı :" + AdaSisman);
/// https://tr.wikibooks.org/wiki/JavaScript/Operat%C3%B6rler
var val2 = 20;
val2 += ++val2
console.log(val2)
*/