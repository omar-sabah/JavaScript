/* global console,alert */
/*في هذا الدرس سوف نتعلم كيفية الربط بين السلاسل النصية*/
var x = "32" + "50";
document.getElementById("conc1").innerHTML = x;
var y="Hello Iam omar my age is" + " " + "Omar";
document.getElementById("conc2").innerHTML = y;
/* عند جمع الاعداد مع السترنج سيتم تطبق العمليات من اليسار الى
 اليمين سواء الجمع او الكونكاتنيش */
 var z = 4 + 5 + "Omar";
 document.getElementById("conc3").innerHTML = z;
 var m = "Omar" + 4 + 5;
 document.getElementById("conc4").innerHTML = m;
 var r = "Omar" + (4 + 5);
 document.getElementById("conc5").innerHTML = r;

 /* اضافة سطر جديد من خلال عناصر
 html
 والتحكم بستايل تلك العناصر*/
 var myName1="Omar Sabah Salman",
     myAge = 40,
     myCountry = "Iraq";
     document.getElementById("myinfo2").innerHTML =
     " <span style= 'color:red'>  My Name is : </span> <span style=\" color:green;\"> "+ myName1 + " </span> <br>"+
     "My Age is : " + myAge + "<br>"+
     "My myCountry is : " + myCountry ;
