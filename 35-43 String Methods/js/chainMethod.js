/*global console, alert*/
//42 - Strings Methods - Chain
/**
 *   وهي طريقة لاختصار كتابة الدوال في سطر واحد بدل تعدد الاسطر وطول الكود
 *
 var myString = myNumber.toString().replace(/0/g, 1).split("");
 * 
 */
var myNumber = 123000;
console.log(myNumber);
console.log(typeof (myNumber));
var myString = myNumber.toString().replace(/0/g, 1).split(""); //Chain
console.log(myString);
console.log(typeof (myString));