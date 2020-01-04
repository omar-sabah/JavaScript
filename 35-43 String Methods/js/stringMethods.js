/*global console, alert*/

// 35 - Strings Methods - Convert To String 
/**
 * تعلمنا سابقا كيفية ادخال اي رمز داخل ملف السترنج
 * " '          '  "   Or '   "  "  '      >>> يجوز كتابة السترنج بهذه الطرق
 * "     \"   \"      "   Or '      \'     \'    '    >> يجب وضع الباك سلاش قبل الرمز من نفس النوع او الرموز الخاصة الاخرى التي تستخدم بكتابة الكود حتى تعتبرها اللغة سترنج
 *  
 * typeof(x) ;   لمعرفة نوع المتغير سواء سترنج او شيء اخر 
 * 
 * x.tostring();  لتغير نوع المتغير من اي نوع الى سترنغ
 * String(x);   نفص الدالة السابقة ولكن غير محبذ استخدامها
 * x.length();  لمعرفة عدد حروف المتغير
 * 
 *  */
var x = "Omar Sabah",
    a = ' My Name is \'Omar\' "Sabar" ';
y = 100;
console.log(typeof (x));
console.log(a);
console.log(x.length);
console.log(typeof (y));
z = y.toString(); // convert y value to String *omsa
m = String(y); //  Second way  convert y value to String  is not use widly*omsa
console.log(typeof (z)); //string
console.log(typeof (m)); //string
n = Number(z); // to convert value to number Agin *omsa
console.log(typeof (n)); //number
