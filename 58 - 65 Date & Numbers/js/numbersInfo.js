/*global console, alert*/
// 63 - Numbers - Intro
/*
1- لا توجد انواع للارقام في الجافا سكربت تتعامل معها على انها 
64 bit floating point 
2 - تتعامل جافا سكربت مع نظام الـ 
 Hexadecimal { 0، 1، 2، 3، 4، 5، 6، 7، 8، 9، A، B، C، D، E، F }
 3- تتعامل جافا سكربت مع نظام الثماني 
 Octal {0,1,2,3,4,5,6,7}
عندما نريد افهام جافا سكربت ان الرقم المدخل هو ثماني يجب ان يبدأ بـ 0
EXP : 076 this is Octal number
4 - NaN :  10 / "omar" thr result is NaN 
5 -infinity & - infintiy : 1/0 Or -1/0 


*/
console.log('##################### 63 - Numbers - Intro ####################');
var x = 0x01,
    y = 012,
    z = 3 / 'omar',
    a = 1 / 0,
    b = -1 / 0;
console.log('x = 0x01 Type is : ' + typeof (x) + ' & it\'s value = ' + x); //x = 0x01 Type is : number & it's value = 1
console.log('y = 012 Type is : ' + typeof (y) + ' & it\'s value = ' + y); // y = 012 Type is : number & it's value = 10
console.log(z); //NaN
console.log(a); // Infinity
console.log(b); //-Infinity

//64 - Numbers - Methods
console.log('##################### 64 - Numbers - Methods ####################');
/*
 1- .toString(): دالة لتحويل اي رقم الى سترنغ  
2 - .toExponential(): 8 e + 1 === > 8 * Math.pow(10, 1); دالة الاس تكتب هكذا
3- (96.65).toFixed(0); // تقريب العدد قبل الفارزة 97  بدون كسور
4- (96.65).toFixed(1); // 96.7تقريب العدد بعد الفارزة
5 -(96.656).toFixed(2); // 96.66تقريب العدد بعد الفارزة
6 parseInt("80 years") / 100  // 0.8 من اهم الدوال استعمالا تحول اي سترنغ الى رقم بشرط ان تبدأ السترنغ برقم
*/
var x1 = 8 * Math.pow(10, 1);
console.log(x1);
console.log((96.65).toFixed(0)); // تقريب العدد قبل الفارزة 97 
console.log((96.65).toFixed(1)); // 96.7تقريب العدد بعد الفارزة
console.log((96.656).toFixed(2)); // 96.66تقريب العدد بعد الفارزة
console.log(parseInt("80 years") / 100); // 0.8 تحول السترنغ الى رقم بشرط ان يبدأ السترنغ برقم

// 65 - Outro and Where to Continue
console.log('##################### 65 - Outro and Where to Continue ####################');
/*
   مواقع مهمة جدا يجب ان تدخل عليها وتتعمق بالجافا سكربت
   1 - https: //developer.mozilla.org/en-US/ 
   2 - https: //www.w3schools.com/
   3 - https: //javascript.info/
   4 - https: //jstherightway.org/
   5 - https: //www.javascript.com/
*/