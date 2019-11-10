/* global console,alert */

// في هذا الدرس سوف نستخدم الوسائل لاخراج البيانات بالجافا سكربت
// 1-alert fuction
var firstName = "Omar ",
    lastName = "Sabah";
    var myDiv = document.getElementById('output'); //توضع هنا لاغراض الكاش وتسريع التصفح
//alert("Hello My Name is : "+firstName + lastName );
/* نستطيع اضافة الاليرت من خلال شريط العنوان وذلك
  javascript alert("hellow world!");
  او من خلال اضافتها في الكونسول في المتصفح
  alert("hellow javaScript");
  */

//2- document.write();  هذه المعادل تستخدم فقط لاغراض التيست لانها توقف تحميل الصفحة عند التحميل
//document.write("Hello My Name is : "+firstName + lastName);

//2- innerHTML
//document.getElementById('output').innerHTML = "Hello My Name is : "+firstName + lastName;
//طريقة اخرى
myDiv.innerHTML = lastName;
//3- console sog سنجد هذا الكلام في الكونسول الخاص بالمتصفح يحتص باظهار البيانات للمبرمج لايجاد الاخطاء
console.log("Hello My Name is : "+firstName + lastName);
