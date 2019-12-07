/*global console, alert*/

/*
(=)Assignment Operator
(==) comparsion Operator compar just Values
(===) Identity Operator for Compare DtataType And Values
(=) يستخدم لاسناد اي قيمة لمتغير
(==) يستخدم للمقارنة بين متغير وقيمة اخرى سواء كانت قيمة او متغير اخر
(===) يستخدم للمقارنة بين متغير وقيمةاو متغير ولكن الفرق
هنا هو للمقارنة بين الطرفين للتأكد من تطابق القيم ونوع البيانات
x = 70 ; هنا رقم سبعين ونوع المتغير رقمي
y = "70" ; هنا رقم سبعين ولكن من نوع سترنج
هنا تكمن فائدة
if (x===y){
  اكيد غير مطابقة لانها متطابقة من ناحية القيمة ولكن مختلفة من ناحية النوع
  (x==y) لو استخدمنا هذا الشرط ستنجح العملية لانه لا يدقق بالنوع فقط بالقيمة
}
*/
var myPrice = 50;
var myPrice2 = "50";

if (myPrice === 50) {
  alert("Good The Price Is " + myPrice + " I have just 50");
}else {
  alert("Sorry The Price Is " + myPrice + " I have just 50");
}
