/*global console, alert*/

//   54 - Math - Random
/*
   Random Syntax :  Math.random(): لجلب ارقام عشوائية على هذا الشكل 0.7895544222111
    نستخدم الدوال السابقة لجلب رقم صحيح ويكون اكثر الاستخدام مع هذه الدالة
    Math.floor() +1 // لتجنب الحصول على رقم الصفر
*/
console.log('#############54 - Math - Random ###################');

var x = Math.random();
console.log(Math.floor(x * 1000) + 1); // Return the numbers are between 1 -  1000 *omsa