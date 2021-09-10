/*

// Date Object


let d = new Date ();
let birthday = new Date(1982,3,20);

// Set Methods 

d.setFullYear(2002); 
d.setMonth(5);
d.setDate(20);
d.setHours(10);
d.setMinutes(45);
d.setSeconds(20);

// Get Methods 

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getUTCMinutes())
console.log(d.getSeconds());



console.log(d.getUTCFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());




console.log(d);
console.log(typeof d);


var dt = new Date();

console.log(dt);

  // şimdiki tarihin gün ay bilgisi

console.log(dt.getMonth()+1);
console.log(dt.getDate());
console.log(dt.getFullYear());
 
// tarih ve saat bilgisini içeren date objesi 

var dtA = new Date ('8/24/2010 15:19:58');
var dtB = new Date (2010,24,14,50,10);


console.log(dtA);
console.log(dtB);


//  1/1/1990 tarihinin bir gün öncesi 

var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);

console.log(dtC);


// iki tarih arasındaki geçen zaman 

var start = new Date('1/1/1990');
var end = new Date('3/11/1992');

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log('milisecond:'+milisecond);
console.log('saniye:'+saniye);
console.log('dakika:'+dakika);
console.log('saat:'+saat);
console.log('gun:'+gun);

// Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılınad ne zaman kutlacaktır 

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() !=0){
     annelerGunu.setDate(annelerGunu.getDate()+1); 
     
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

// yaş hesaplama nasıl yapılır 

var birthday = new Date('8/1/1985');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() -1970);

// console.log(birthday.getTime());
// console.log(Date.now());

*/