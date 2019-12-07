/*global console, alert*/
// ****************************Start Mathmatic Operators**************************************
var x1 = 10 + 8 ; // اشارة الجمع
document.getElementById('add').innerHTML = 'Result = ' + x1;
var x2plus1 = 2 ; //الزيادة بمقدار 1
// عند زيادة المنتح وتعديله في قاعدة البيانات
document.getElementById('twoplus').innerHTML = 'A = ' + (++x2plus1);
var x2plus2 = 2 , //الزيادة بمقدار قيمة متغير على قيمة المتغير الاصلي عن طريق اشارة+ ي
    y2plus2 = 3;
document.getElementById('oneplus').innerHTML = 'A = ' + (x2plus2 +=y2plus2);
var x2 = 1000 - 400; //اشارة الطرح
document.getElementById('sub').innerHTML = 'Result = ' + x2;
var x2minus1 = 10; //الطرح بمقدار 1
//تستخدم عند نقصان المنتج عند عملية الشراء وتعديل القيمة في قاعدة البيانات
document.getElementById('twominus').innerHTML = 'A-- = ' + (--x2minus1);
var x2min2 = 10 , //التنقيص بمقدار قيمة متغير من قيمة المتغير الاصلي عن طريق اشارة - ي
    y2min2 = 8;
document.getElementById('oneminus').innerHTML = 'A = ' + (x2min2 -=y2min2);
var x3 = "omar" - 400;// اشارة الخطأ
document.getElementById('nan').innerHTML = 'Result = ' + x3;
var x4 = 1000 / 200; // اشارة القسمة يعطى نتيجة القسمة بالمضبوط
document.getElementById('divsion').innerHTML = 'Result = ' + x4;
var x5 = 1000 % 300; //باقي القسمة
document.getElementById('rdivsion').innerHTML = 'Result = ' + x5;
var x5 = 20 * 50; //اشارة الضرب
document.getElementById('multi').innerHTML = 'Result = ' + x5;
// ****************************End Mathmatic Operators**************************************
