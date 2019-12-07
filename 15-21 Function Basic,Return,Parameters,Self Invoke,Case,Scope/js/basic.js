/*global console, alert*/
/*
لتعريف اي فانكشن يتم كالتالي

  اسم الفنكشن         اعلان عن
function         funcName   ()  {

}
*/
function sayHello(){
  "use strict";   // سيتم شرحها لاحقا
  var myName = "Omar";

  if (myName === "Omar") {
    alert("Hello " + myName + " form inside javascript basic function" );
  } else{
    alert("Hello form inside javascript basic function" );
  }
}
 /*
توجد عدة عناصر لاستدعاء الفانكشن
1- من خلال كتابة اسم الفانكشن هنا في هذا الملف بشرط يكون خارج الفانكشن نفسها

sayHello();

2- من خلال عناصر html
button ,span ,.....
بنفس الطريقة فقط استدعاء اسم الفنكشن داخل حدث العنصر

 */
