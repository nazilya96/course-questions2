
//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR
// !MUREKKEB OLDUGUNU DUSHUNDUYUNUZ TASKLAR AYRI FAYLDA YAZILMALIDIR. (FAYL ADI TASKA UYGUN QOYULMALIDIR)
// !SONDA BUTUN KODLAR GITHUBA YUKLENILMELIDIR




// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR. 


// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN 

// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'

// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin 
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin


// let SET = 'SET_DATA';
// let GET = 'GET_DATA';
// let DELETE = 'DELETE_DATA';

// function processCase(type) {  
//     switch (type) {
//       case SET:
//         console.log('set -console - ' , "SET_DATA");
//         break;
//       case GET:
//         console.log('get -console - ' , 'GET_DATA');
//         break;
//       case DELETE:
//         console.log('delete -console -' , 'DELETE_DATA');
//         break;
//       default:
//         console.log("Düzgün qeyd olunmaıb");
//     }
//   }
  
//   processCase(SET);
//   processCase(GET);
//   processCase(DELETE);
//   processCase('DAA')
  


// 1.2  2ci merhelede functiondan kenarda array yaradin ve 
//      Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin


// let SET = 'SET_DATA';
// let GET = 'GET_DATA';
// let DELETE = 'DELETE_DATA';

// let numbersArray = [];

// function processCase(type) {
//   switch (type) {
//     case SET:
//       for (let i = 1; i <= 10; i++) {
//         numbersArray.push(i); // 1-10 arası rəqəmləri əlavə edirik
//       }
//       console.log(numbersArray);
//       break;
//     case GET:
//       console.log('get - console', 'GET_DATA');
//       break;
//     case DELETE:
//       console.log('delete - console', 'DELETE_DATA');
//       break;
//     default:
//       console.log("Düzgün qeyd olunmaıb");
//   }
// }

// processCase(SET);



// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin 
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.


// let SET = 'SET_DATA';
// let GET = 'GET_DATA';
// let DELETE = 'DELETE_DATA';

// let numbersArray = [];

// function processCase(type) {
//   switch (type) {
//     case SET:
//       for (let i = 1; i <= 4; i++) { // burda i <=0 etdikde console silinecek data yoxdu chixir
//         numbersArray.push(i);
//       }
//       console.log(numbersArray);
//       break;
//     case GET:
//       console.log('get -console - ', 'GET_DATA');
//       break;
//     case DELETE:
//       if (numbersArray.length > 0) {
//         numbersArray.pop(); // pop() ilə son elementi silirik
//       } else {
//         console.log('Silinəcək data tapılmadı');
//       }
//       break;
//     default:
//       console.log("Düzgün qeyd olunmaıb");
//   }
// }

// processCase(SET);
// processCase(DELETE);
// console.log(numbersArray);



// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun


// let SET = 'SET_DATA';
// let GET = 'GET_DATA';
// let DELETE = 'DELETE_DATA';

// let numbersArray = [];

// function processCase(type) {
//   switch (type) {
//     case SET:
//       for (let i = 1; i <= 10; i++) {
//         numbersArray.push(i);
//       }
//       break;
//     case GET:
//       console.log(numbersArray);
//       break;
//     case DELETE:
//       if (numbersArray.length > 0) {
//         numbersArray.pop();
//       } else {
//         console.log('Silinəcək data tapılmadı');
//       }
//       break;
//     default:
//       console.log("Düzgün qeyd olunmaıb");
//   }
// }

// processCase(SET);
// processCase(GET);




///////////////////////////////////////////////////////////////////////////////////////////

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin  
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.


// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// for (let i = 0; i < mL.length; i++) {
//   let month = mL[i];
//   let days;

//   switch (month) {
//     case 'January':
//     case 'March':
//     case 'May':
//     case 'July':
//     case 'August':
//     case 'October':
//     case 'December':
//       days = 31;
//       break;
//     case 'April':
//     case 'June':
//     case 'September':
//     case 'November':
//       days = 30;
//       break;
//     case 'February':
//       days = '28-29';
//       break;
//     default:
//       days = 'Mövcud deyil';
//   }

//   console.log(`${month} - ${days} days`);
// }



// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin


// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let currentDate = new Date();
// let currentMonthIndex = currentDate.getMonth();
// let daysInMonth = new Date(currentDate.getFullYear(), currentMonthIndex + 1, 0).getDate();

// console.log(` ${mL[currentMonthIndex]} - ${daysInMonth} days`);


// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let currentDate = new Date('2023-08-20');
// let currentMonthIndex = currentDate.getMonth();
// let currentMonthName = mL[currentMonthIndex];
// console.log(currentMonthName);

// let halfOfYear;

// switch (currentMonthName) {
//   case 'January':
//   case 'February':
//   case 'March':
//   case 'April':
//   case 'May':
//   case 'June':
//     halfOfYear = 'ilin 1-ci yarısına';
//     break;
//   case 'July':
//   case 'August':
//   case 'September':
//   case 'October':
//   case 'November':
//   case 'December':
//     halfOfYear = 'ilin 2-ci yarısına';
//     break;
//   default:
//     halfOfYear = 'ERROR: Düzgün ay qeyd olunmaıb.';
// }

// console.log(`${currentMonthName} ayı ${halfOfYear} aiddir.`);



// ehtiyyac yoxduuu // // / /  / // / / / / elaaaaaa
// 5) 4 cu taski heftenin gunleri ile yoxlayin




// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun


// let currentDate = new Date();
// new Date('2023-05-20')
// let currentDay = currentDate.getDate();
// let currentWeekNumber = Math.ceil(currentDay / 7);

// console.log(`Ayın ${currentWeekNumber}ci həftəsindəyik.`);


///////////////////////////////////////////////////////////////////////////////////////////



// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.


// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin 
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5


// 1.1 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January'], 
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'], 
//     ['August'], 
//     ['September'],
//     ['October'],
//     ['November'], 
//     ['December']
// ];


// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let newMl = [];

// for (let i = 0; i < mL.length; i++) {
//   newMl.push([mL[i]]);
// }

// console.log(newMl);


///////////////////////////////////////////////////////////////////////////////////////////


// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'], 
//     ['May','June','July','August'], 
//     ['September' , 'October', 'November', 'December']
// ];



// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let newMl = [];
// let newMlArr = [];

// for (let i = 0; i < mL.length; i++) {
//   newMlArr.push(mL[i]);
//   if (newMlArr.length === 4 || i === mL.length - 1) {
//     newMl.push(newMlArr);
//     newMlArr = [];
//   }
// }

// console.log(newMl);



///////////////////////////////////////////////////////////////////////////////////////////


// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']], 
//     ['May','June',['July','August']], 
//     ['September' , ['October', 'November', 'December']]
// ];


// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// function createNewMon(startIdx) {
//   if (startIdx >= months.length) {
//     return [];
//   }
  
//   const month1 = months[startIdx];
//   const month2 = months[startIdx + 1];
//   const month3 = months[startIdx + 2];
//   const month4 = months[startIdx + 3];
  
//   const innerArr = [month1, month2, [month3, month4]];
  
//   return [innerArr, ...createNewMon(startIdx + 4)];
// }


///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]], 
//     ['May','June',['July',['August']]], 
//     ['September' , ['October', 'November', ['December']]]
// ];



// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
//  let newArr = []; 
//  let currentIdx = 0; 
  
//  for (let i = 0; i < 3; i++) { 
//    let innerArr = [mL[currentIdx], mL[currentIdx + 1]]; 
  
//    if (i === 0) { 
//      innerArr.push([mL[currentIdx + 2], [mL[currentIdx + 3]]]); 
//    } else if (i === 1) { 
//      innerArr.push([mL[currentIdx + 2], [mL[currentIdx + 3]]]); 
//    } else if (i === 2) { 
//      innerArr.pop() 
//      innerArr.push([mL[currentIdx + 1], mL[currentIdx + 2] ,[mL[currentIdx + 3]]]); 
//    } 
  
//    newArr.push(innerArr); 
//    currentIdx += 4; 
//  } 
  
//  console.log(newArr);


///////////////////////////////////////////////////////////////////////////////////////////


// 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']], 
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']], 
// ];


// let newArr = []; 
//  let currentIdx = 0; 
  
//  for (let i = 0; i < 3; i++) { 
//    let innerArr = [mL[currentIdx], mL[currentIdx + 1]]; 
  
//    if (i === 0) { 
//      innerArr.push([mL[currentIdx + 2], mL[currentIdx + 3]]); 
//    } else if (i === 1) { 
//      innerArr.pop() 
//      innerArr.push([mL[currentIdx + 1], mL[currentIdx + 2], mL[currentIdx + 3]]); 
//    } else if (i === 2) { 
//      innerArr.push([mL[currentIdx + 2] ,mL[currentIdx + 3]]); 
//    } 
  
//    newArr.push(innerArr); 
//    currentIdx += 4; 
//  } 
  
//  console.log(newArr);



///////////////////////////////////////////////////////////////////////////////////////////



// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// let fullName = 'Nazila Karimova';
// let firstName = fullName.split(' ')[0].toUpperCase();
// let lastName = fullName.split(' ')[1].toUpperCase();

// let maxLength = Math.max(firstName.length, lastName.length);
// firstName = firstName.padEnd(maxLength, 'X');
// lastName = lastName.padEnd(maxLength, 'X');

// let result = firstName.split('').map((a, index) => [a, lastName[index]]);

// console.log(result);



// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var) 
// sonra onlari umumi arraya elave etmelisiz


///////////////////////////////////////////////////////////////////////////////////////////



// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

// let babek = 'Ey babeK kebaB ye!';
// let reversedBabek = '';

// for (let i = babek.length - 1; i >= 0; i--) {
//     reversedBabek += babek[i];
// }

// console.log(reversedBabek);


// let babek = 'Ey babeK kebaB ye!';
// let reversedBabek = babek.split('').reverse().join('');

// console.log(reversedBabek);


// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin


// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0 || arr[i] % 7 === 0) {
//         sum += arr[i];
//         console.log(arr[i])
//     }
// }

// console.log('5 və 7 rəqəminə bölünən rəqəmlərin cəmi:' , sum);




// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)


// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];

// let maxEven = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] >= 100 && arr[i] <= 999 && arr[i] > maxEven) {
//         maxEven = arr[i];
//     }
// }

// console.log(maxEven);




// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];

// let minDivisibleBy3 = Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0 && arr[i] !== 3 && arr[i] < minDivisibleBy3) {
//         minDivisibleBy3 = arr[i];
//     }
// }

// console.log(minDivisibleBy3);




// 7) verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//     key1: 0,
//     key2: 3,
//     key3: 2,
//     key4: 4,
//     key5: 53,
//     key7: 7,
//     key8: 8,
//     key9: 91,
// };

// let checkValues = [];

// for (let key in obj) {
//     let lastDigitKey = parseInt(key[key.length - 1]);
//     if (obj[key] === lastDigitKey) {
//         checkValues.push(obj[key]);
//     }
// }

// console.log(checkValues);



////////////////////////////////////////////////////////////////////////////////////////////////



// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.


// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.

// cavabi -> window.doc-01.html


// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.

// cavabi -> window.doc-02.html


// 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
//  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.

// cavabi -> window.doc-03.html


// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.

// cavabi -> window.doc-04.html


// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce  
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin

// cavabi -> window.doc-05.html


// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin. 
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.

// cavabi -> window.doc-06.html


// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin. 
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin. 

// cavabi -> window.doc-07.html


// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur. 
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq

// cavabi -> window.doc-08.html


// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin. 

// cavabi -> window.doc-09.html


// 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun 

// cavabi -> window.doc-10.html
