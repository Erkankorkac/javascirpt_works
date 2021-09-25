// Loops

// for loop

// for(let i=1; i<=10; i++){

//     if(i==3){
//         console.log('en sevdigim rakam :'+i);
//         continue;

//     }
    
//     if (i==6){
//         console.log('en sevmediğim rakan :6');
//         break;
//     }
    
//     console.log(i);
    
// }


// while loop

// for (let i=0; i<10;i++){
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }


// do-while loop

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);


// let sonuc=1;
// for(let i=10;i>0;i--){
//     if(i%2==1){
//         sonuc*=i;
//     }
// }
// console.log(sonuc);

// let val ='\n';
// for(let i=0;i<10;i++){
//     for(let j=0;j<10;j++){
//         val +='* ';
//     }
//     val+='\n';
// }
// console.log(val);


// Loops in Array & Objects

// let cars =['Bmw','Mercedes','Toyota'];
// let people = [
//     {firstName:'ada',lastName:'bilgi'},
//     {firstName:'yiğit',lastName:'bilgi'},
//     {firstName:'çınar',lastName:'bilgi'}

// ];

// Arrays 

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

// Objects

// for(let i=0; i<people.length;i++){
//     console.log(people[i].firstName);
// }

// for-in

// Arrays

// for(let i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }


// Objects


// for(let i in people){
//     console.log(`index : ${i} value : ${people[i].firstName}`);
// }


// foreach

// cars.forEach(function(item){
// console.log(item)
// });

// people.forEach(function(item){
//     console.log(item.firstName);
// });


// map : returns an array 

// let val = people.map(function(item){
//     return item.firstName + ' '+ item.lastName;
// });
// console.log(val);



// let numbers = [1.5,6,8,10];

// let num = numbers.map(function(n){
//     return n*n;
// });

// console.log(num);




/*
  Demo Loops : Sayı tahmin oyunu 


  1-10 arası rastgele sayı üretilen sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
  ** puanlama yapın.
  ** kullanıcı kaç kerede bilicegini belirtebilirsin.
*/

// var hak,can;
// var tahmin,sayac=0;
// var sayi = Math.floor((Math.random()*10)+1);
// can = Number(prompt('kaç kerede bileceksiniz ?'));
// hak = can;
// console.log(sayi)

// while(hak>0){
//     hak --;
//     sayac ++;
//     tahmin = Number(prompt('bir sayı giriniz'));
    
//     if(sayi == tahmin){
//         console.log(`Tebrikler ${sayac} defada bildiniz`);
//         console.log(`puan : ${100 - (100/can)*(sayac-1)}`);

//         break;
//     }else if (sayi > tahmin){
//         console.log('yukarı');
//     }else{
//         console.log('aşağı');
//     }

//     if(hak==0){
//         console.log('hakkınız bitti.');
//     }
// }