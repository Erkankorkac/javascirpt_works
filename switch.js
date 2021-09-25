// // switch statements

// let category = 'telefon';

// switch(category){

//       case 'telefon':
//          console.log('telefon kategorisi')
//       break;

//       case 'telefon':
//         console.log('bilgisayar kategorisi')
//       break;

//       default:
//           console.log('yanlış kategori')
// }

// let day;
// console.log(new Date().getDate())
// switch(new Date().getDay()){
//    case 0:
//        day = 'pazar';
//    break;     
   
//    case 1:
//        day = 'pazartesi';
//    break;     
   
//    case 2:
//         day = 'salı';
//    break;     
   
//    case 3:
//         day = 'çarşamba';
//    break; 

//    case 4:
//        day = 'perşembe';
//    break;     

//    case 5:
//         day = 'cuma';
//     break;     

//   case 6:
//        day = 'cumartesi';
//    break;      
// }
// console.log(`bugün ${day}`);


// const age = 19;
// const firstName = 'sena';
// switch(true){
//      case age>0 && age<12:
//         console.log(`${firstName} is a child`);
//      break;
//      case (age >=13 && age <=19):
//         console.log(`${firstName} is a teenager`);
//      break;   
//      default:
//         console.log(`${firstName} is an adult`);
//         break;
// }


// var trafigeCikis = new Date('04/20/2016');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun= Math.floor(trafiktekiMs/(1000*60*60*24));

// if(trafiktekiGun<=365){
//     console.log('1.servis bakım süreniz geldi');
// }else if(trafiktekiGun>365 && trafiktekiGun<365*2){
//     console.log('2.servis bakım süreniz geldi')
// }else if(trafiktekiGun>365*2 && trafiktekiGun<365*3){
//     console.log('3.servis bakım süreniz geldi')
// }else{
//     console.log('bilinmeyen bir süre')
// }

// console.log(trafiktekiGun);


// var result = prompt("Who's there ?");


// if(result == 'cancel'){
//     console.log('cancelled')
// }else if(result == 'admin'){
//     console.log('welcome admin')

//     var password = prompt('enter your password :');7

//     if(password =='cacel'){
//         console.log('cancelled');
//     }else if(password == '1234'){
//         console.log('welcome admin');
//     }else{
//         console.log('wrong password');
//     }



// }else{
//     console.log('I dont know you');
// }