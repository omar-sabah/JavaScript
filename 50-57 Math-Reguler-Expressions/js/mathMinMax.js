/*global console, alert*/

//53 - Math - Min Max 
/*
    Min Syntax: Math.min(value1,value2,value3,...); // لايجاد اصغر قيمة في المدخلات


    Max Syntax: Math.max(value1, value2, value3, ...); // لايجاد اكبر قيمة يف المدخلات

    نستطيع دمج هذه الدوال مع الدوال السابقة لتسهيل استخراج اي قيمة نريدها
    Math.max(Math.round(Math.ceil(x) + 10.5)); // حسب الحاجة التي نريد عملها

*/
console.log('#############50 - Math - MinMax ###################');
var x = Math.min(100, 20, -100.2, 50.5, 99.4, 75),
    y = Math.max(100, 20, -100.2, 50.5, 99.4, 75);
console.log("Math.min(x) = " + x);
console.log("Math.max(y) = " + y);
console.log("MathMath.ceil(x+10.5) = " + Math.ceil(x + 10.5));