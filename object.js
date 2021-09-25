// object Literals 

// let val;


// let person = {
//     firstName : 'erkan',
//     lastName : 'korkaç',
//     age : 7,
//     hobbies : ['music','game'],
//     address :{
//         ctiy :'van',
//         country :'türkiye'
//     },
//     getBirthYear : function(){
//         return 2018- this.age;
//     }
// };

// val = person.firstName;
// val = person.lastName;
// val = ['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.hobbies.length;
// val = person.address;
// val = person.address.ctiy;
// val = person.address['ctiy'];
// val = person.getBirthYear();


// console.log(val);
// console.log(typeof person);


// let people = [
//               {firstName :'erkan',lastName:'korkaç'},
//               {firstName :'memo',lastName:'korkaç'},
//               {firstName :'ezo',lastName:'korkaç'}
//              ]

// val = people[2];
// val = people[2].firstName;

// for(let i =0; i<people.length;i++){
//     console.log(people[i].firstName);
// }

// console.log(val);
// console.log(typeof people);


/*

Araç Bilgileri:

    id : bmw116_1234
    model : 116d
    yıl : 2015
    renk : white
    servis kayıtları :
           id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret :900
              servis detayı:
              id : 1 işlem : yağ değişimi ücret : 3000
              id : 2 işlem : filtre degişimi ücret: 300
              id : 3 işlem : fren hidroliği ücret: 300

            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret :1800
              id : 1 işlem : yağ değişimi ücret : 350
              id : 2 işlem : filtre degişimi ücret: 350
              id : 3 işlem : fren hidroliği ücret: 300
              id : 3 işlem : balata degişimi ücret:800

*/ 


// var aracBilgileri = {
//     id : 'bmw116d_123',
//     model : 'bmw 116d',
//     yil : 2015,
//     renk : 'Beyaz',
//     servisKayitlari : [
//         {
//             id : 'bmw116d_123_1',
//             tarih : '20.01.2016',
//             km : '13000',
//             ucret : 900,
//             detay : [
//                 {
//                     id : 'bmw116d_123_1_1',
//                     aciklama : 'yağ değişimi ücret',
//                     ucret : 300


//                 },
//                 {
//                     id : 'bmw116d_123_1_2',
//                     aciklama : 'filtre degişimi ücret',
//                     ucret : 300


//                 },
//                 {
//                     id : 'bmw116d_123_1_3',
//                     aciklama : 'fren hidroliği ücret',
//                     ucret : 300


//                 }



//             ]
//         },
//         {
//             id : 'bmw116d_123_2',
//             tarih : '10.01.2017',
//             km : '28000',
//             ucret : 1800,
//             detay : [
//                 {
//                     id : 'bmw116d_123_2_1',
//                     aciklama : 'yağ değişimi ücret',
//                     ucret : 350


//                 },
//                 {
//                     id : 'bmw116d_123_2_2',
//                     aciklama : 'filtre degişimi ücret',
//                     ucret : 350


//                 },
//                 {
//                     id : 'bmw116d_1232_3',
//                     aciklama : 'fren hidroliği ücret',
//                     ucret : 800


//                 }



//             ]
            
//         }



//     ]

// }
// console.log(aracBilgileri);
// console.log(servisKayitlari);