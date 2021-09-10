
/*
let names = ['erkan','memo','ezo','korkaç'];
let years = [2017,1999,1992,2010];
let mix = ['sadık','turan',1983,null,undefined,
['sinema','kitap']]

console.log(years);
console.log(mix);

// get array item = dizideki kaçıncı elamanı istiyorsak onu seçer
console.log(names[0]);
console.log(names[3]);

// set array item = eleman atar (veya degiştirir)
names[names.length]='emel';

// add item = eleman atanak 
years.push(1986); // sona atar
years.unshift(1985); //başa atar

// remove item = eleman siler 
years.pop(); // en sondaki elemannı siler
years.shift(); //en baştaki elemanı siler 

// indexof  = arama yapar ve dizi numarsını  gösterir
let index = names.indexOf('ezo');
console.log('index : '+index);
 
// reverse = dizi elemanlarını ters çevirir
names.reverse();

// sort = sıralama yapar
years.sort();

// concat = dizi birleştirme
let val = years.concat(names);
console.log(val);


// splice 
// names.splice(2,1,'seda');   // ilkine start konacagı deger kincisine silinecek deger(istemiyorsak (0)koyarız) üüççüncüsü yerine koyacagımız deger

function over18(year){
    let age =2018 -year;
    return age>=18;

}

// let val = years.find(over18);


// filter = birden fazla deger çıkartmasını istiyorsak kullanılır 
let val = years.filter(over18);
console.log(val);



console.log(names)
console.log(names.length);
console.log(typeof names);

*/
/*
// Demo : Arrays

//"Bmv,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun
 var arr = ["Bmv","Mercedes","Opel","Mazda","Fiat"];

// Dizi kaç elemanlıdır ?
console.log(arr);
console.log(arr.length);

// Dizinin ilk ve son elemanı nedir ?
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[arr.length-1]);
//"Renault" degerini dizinin sonuna ekleyin 
/// arr[4] = "renault";
arr[arr.length] = "Renault"

//"Toyota" degerini dizinin başına ekleyin 
arr.unshift('Toyota');
//"Renault" degerini siliniz
arr.pop('Renault');

//"Toyota" degerini siliniz 
arr.shift('Toyota');

// dizi elemanlarını ters çevirin
arr.reverse();

// Dizi elemanlarını alfabetik olarak sıralayın.
arr.sort();


// [1,2,5,80,15] dizisini sıralayın 
var numbers = [1,2,5,80,15];

function compare(a,b){
         if(a>b) return 1;
         if(a==b) return 0;
         if(a<b) return -1;


}

console.log(numbers.sort(compare));

// Opel diznin bir elemanımıdır ?

console.log(arr);
 console.log(arr.indexOf('Opel'));
 console.log(arr.includes('Opel'));
 
// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz

var str = "Chevrolet,Dacia";
var arr2 =str.split(',');
console.log(arr2);

//oluşturulan 2 dizinin elemanşarını bir başka dizi ile birleştirin
var arr3 = arr.concat(arr2);
console.log(arr3);
//oluşturulan diziden son 2 elemanı siliniz

//Aşagıda verilen elemanları bir dizi içerisinde saklayınız.
      
//   studentA : Yiğit Bilgi 2010
//   studentB : Sena  Turan 1999
//   studentC : Ahmet Turan 1998
    

var studentA = ['Yiğit','Bilgi',2010];
var studentB = ['Sena','Turan',1999];
var studentC = ['Ahmet','Turan',1998];

console.log(students);

var students = [studentA,studentB,studentC];

console.log(students[0]);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);


 */

