/* global console,alert */
// Data Tyeps     انواع البيانات في الجافاسكربت

//1- Boolean : yes = true , No=false يقبل القيمة صح او خطأ وكما في المثال التالي

var mainPrice = 500; // السعر الرئيس للمنتج
    dicountValue = 100; // قيمة التخفيض للمنتج
var hasDiscount = true; // ويعبر عن هل يوجد تخفيض ويحمل القيمة نعم Boolean هذا المتغير من النوع

//اسناد قيمة للسبان الموجود في اول بارغراف والذي يعبر عن سعر المنتج
document.getElementById("dproduct").innerHTML = mainPrice + "$"; //الكونكاتنيشن دمج العبارات
//اسناد حالة التخفيض نعم او لا
document.getElementById("ddiscount").innerHTML = hasDiscount;

if (hasDiscount === true) {
  total = mainPrice - dicountValue; // متغير يخزن قيمة المنتج بعد الخصم
  document.getElementById("dtotal").innerHTML = total + "$";
} else {
  //فقط اطبع السعر الاصلي للمنتج false في حالة المنتج لا يحتوي على خصم اي القيمة
  document.getElementById("dtotal").innerHTML = mainPrice + "$";
}
//**********************************************************************
//2- Araay المصفوفات سيتم شرحها بالتفصيل في دروس لاحقة
var socialWebsite =["facebook.com","youtube.com","google.com"];
                                            //arrayName[indexNo]
document.getElementById("social1").innerHTML = socialWebsite[0];
document.getElementById("social2").innerHTML = socialWebsite[1];
document.getElementById("social3").innerHTML = socialWebsite[2];
//3- ObjectName = {item1Name:value,item2Name:value}
var info={firstName:"Omar",lastName:"Almashhadany"};
document.getElementById("myName").innerHTML = info.firstName + " " + info.lastName;
//4- String : x = "value";
/* في السترنج ""==''  وايضا نكتب السنجل داخل الدبل والدبل داخل السنكل
وفي حالة اردنا ان نضع دبل داخل دبل او سنجل داخل السنجل نستخدم \ قبل الستجل
او الدبل
"Omar \" Sabah\"" Or 'omar \'Sabah\' '
*/
 var myAddress = "Mekez 'Sinop'";
 document.getElementById("str").innerHTML = myAddress;
//4- Number : no = 32;
var age=32;
document.getElementById("no").innerHTML = age;

//5- Undefind : var x; // متغير معرف بدون اسناد قيمة له
var result;
document.getElementById("un").innerHTML = result;
//6- Null , NaN = not a Number ,symbol سيتم شرحها بالتفصيل 

// typeof من الدوال الجاهزة التي ترجع قيمة نوع المتغير التي نستخدمها للتحقق داخل الكونسول في المتصفح
