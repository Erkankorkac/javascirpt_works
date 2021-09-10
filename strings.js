 // Strigs 

/* 
 const firstName = 'Erkan';
 const lastName = "Korkaç";
 let hobbies = 'sinema,spor,kitap,yazılım';
 const age = 20;
 let val;


// String cancatenation 

val = firstName +" "+ lastName;
val = 'Erkan';
val += 'Korkaç';

val = 'Benim adım'+' '+ firstName + ' '+ lastName + ' ve yaşım ' + age + " Van'da yaşıyorum" ;

// string concat
 
val = firstName.concat(' ',lastName);


// string replace 
val = val.replace('Erkan','nakre' );

// trim 
val = val.trim();
// substring 
//val = val.substring(0,5);
 
// slice
//val = val.slice(6);
// string uppercase - lowercase 
//val = val.toUpperCase(); // karekterleri büyük harf yapar 
//val = val.toLocaleLowerCase(); // karekterleri küçük harf yapar 

 

//val = val.indexOf('') // karekter arama için kullanılır
//val = val[2]; // index numrasını yazarak o sıradaki harfi sasdece gösterir

// string length 
//val = val.length;  //kaç karekter oldgunu

// split
//val = hobbies.split(',');

console.log(val);
console.log(typeof val);

*/




// Template Literals 

/*

const fullName = 'Erkan Korkaç';
const city = 'van';
const yearOfBirth = 1999;

let val;

val = 'my name is ' + fullName+ ' I\'m ' + (2021-yearOfBirth)+ ' years old' + ' and I live in '+city;
val = ` my name is ${fullName} Im ${
    (2021-yearOfBirth >= 19) ? 'over 19' : 'under 19' } and I live in ${city};`


console.log(val);
const firstName = 'erkan'
const lastName = 'korkac'
const displayName = firstName.concat(' ', lastName, ' ', 'abc')
console.log(displayName.split(' '))


*/


// Demo strings
/* 
var sentence = "  Template literals or template  strings is the ability Have multi-line strings without any funny business. ";

var url = "http://erkankorkac.com/Modern Javascript KURSU sıfırdan ileri seviye i o ü ş";
console.log(sentence);
console.log(url);
// cümle kaç karekterlidir ?
console.log(sentence.length);
// kaç kelimeden oluşuyor ?
console.log(sentence.trim().split(' ').length);
// Tüm cümleyi küüçük harfe çevirin
console.log(sentence.toLocaleLowerCase());
console.log(sentence.toLocaleUpperCase());
// cümlenin başındaki ve sonundaki boşlukları silin 
console.log(sentence.trim());
// ' - ' karekteni silin 
console.log(sentence.replace('-',''));

// url' nin içinden str kısmını çıkarınız 
var str = 'http://';

console.log(url.substr(str.length));
console.log(url.slice(str.length));


// url hangi protokolü kullanmaktadır ? (http,https);
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url '.com' ifadesini içeriyor mu ?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

// url string ifadesini geçerli bir url olarak düzenleyiniz
console.log(url.toLocaleLowerCase()
                .replace(/ /g,'-' )
                .replace(/ı /g,'i' )
                .replace(/ü/g,'u' )
                .replace(/o/g,'ö' )
                .replace(/ş/g,'s' )



);
*/