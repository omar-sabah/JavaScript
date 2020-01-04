/*global console, alert*/
// 58 - Date - Date Intro
/*
في هذا الفصل يسوف نتعامل مع التاريخ يحتوي على دوال جاهز لكل ما يخص التعامل مع التواريخ
  
1-   var x = new Date(); 
       console.log(x) ;     : يجلب التاريخ والوقت لهذا اليوم حتى لحظة الاستدعاء باليوم والشهر والسنة والساعة والدقيقة والثانية واجزاء الثانية حسب التوقيت العالمي
      Tue Dec 31 2019 12:08:41 GMT+0300 (GMT+03:00) 

2-  var x = new (Millseconds); : print millesecond form UTC 1 1 1970 يوم انطلاق برمجة اليونكس
     1 Second = 10000 millesecond 

3-  var x = new Date(String);   =>  var x = new Date(" Julay 24, 1979 01:30:10");
      console.log(x) ; // Tue Jul 24 1979 01:30:10 GMT+0300 (GMT+03:00) يعطينى التاريخ مضاف اليه اليوم

4- var x new Date(Year , Month , Day,Hour,Minutes,Sceconds,Milleseconds) ; ادخال تاريخ كامل
 مع ملاحظة ان الشهر يبدأ من الصفر اي عندما نريد كتابة الشهر الـ 11 ندخل 10

5-      - https://www.timeanddate.com/ : موقع لمعرفة التوقيت العالمي لا دولة


*/
console.log('##################### 58 - Date - Date Intro ####################');

var theDate = new Date();
console.log(theDate); //Tue Dec 31 2019 12:43:50 GMT+0300 (GMT+03:00)

var theDate2 = new Date(10000);
console.log(theDate2); // Thu Jan 01 1970 02:00:10 GMT+0200 (GMT+03:00)
var theDate3 = new Date(' Julay 24, 1979 01:30:10');
console.log(theDate3); // Tue Jul 24 1979 01:30:10 GMT+0300 (GMT+03:00)

var theDate4 = new Date(1980, 10, 14, 07, 30, 20, 5000);
console.log(theDate4); // Fri Nov 14 1980 07:30:25 GMT+0300 (GMT+03:00)

//59 - Date - Date Format
console.log('##################### 59 - Date - Date Format ####################');
/*
Date Format  اشكال التاريخ 
 
Full Format :  كما كتبناه بالتفصل بالدرس الاول
Long Format : ايضا ضمن الدرس الاول عندما كتبنا التاريخ باشكال مختلفة
Shor Formt : new Date(10/03/1990); نستطيع كتابتة التاريخ باختصار بشرط ان يأتي الشهر قبل اليوم ولا يهم في حالة جاء السنة قبل الكل او بعدها
ISO formt : (YYYY-MM-DD hh:mm:ss TZD== time zone لاي بلد)

Js Ignore commas : تتجاهل الكوما في التاريخ
Js Month Insensitive :  غير حساسة لكيفية كتابة الشهر احرف كبيره او صغيرة او بالخطأ هي سوف تصحح الكتابة
[Month,Day, Year] or [Day,Month,Year] باستثناء حالة Sort format
*/

var mydate = new Date('10 05 2015');
console.log(mydate); //Mon Oct 05 2015 00:00:00 GMT+0300 (GMT+03:00)
var mydate2 = new Date('2020-01-01 02:51:20 +01:00'); //استطيع التحكم بالتايم زون حسب الدولة
console.log(mydate2); //Wed Jan 01 2020 04:51:20 GMT+0300 (GMT+03:00)

//60 - Date - Date Functions Part 1
console.log('##################### 60 - Date - Date Functions Part 1  ####################');

/*
getDate() // Day of the Month 1-31
getDay()  // Day of The Week 0-6 => sun=0 to sat=6
getFullYear() // Get the Full Year
getHours() // Get Hours 0-59
getMintes()// Get Mintes 0-59
getSeconds() // Get Seconds 0-59
getMilliseconds() // Get Milliseconds  from  0-999
getTime()// Get Number of Millliseconds form 1970 or Specific date
getTimeZoneOffset() // Get Def between UTC & Your Local Time in Mintes and with nagative value like -180=+3 or -120 = +2
جميع الدوال السابقة بالتوقيت المحلي نستطيع تطبيقها مع اضافة 
UTC like getUTCHours(); سوف تعطينا الساعة حسب التوقيت العالمي
*/
var theDate = new Date();
console.log(theDate.getDate()); //31
console.log(theDate.getDay()); // 2
console.log(theDate.getFullYear()); //2019
console.log(theDate.getHours()); //15
console.log(theDate.getMinutes()); //30
console.log(theDate.getSeconds()); //22
console.log(theDate.getMilliseconds()); //30
console.log(theDate.getTimezoneOffset()); //-180
console.log(theDate.getUTCHours()); //12      ==> 15 - (-180 == 3) = 12

// معادلة حساب عمر بالسنين
var x = new Date('07 24 1979');
var a = x.getTime(); // for get my age in milliseconds form 1970 until my specific birthday
var b = theDate.getTime(); // for get milliseconds form 1970 to Now
var c = b - a;
var d = c / 1000 / 60 / 60 / 24 / 365;
console.log('My Age is : ' + Math.round(d) + ' years');

// 61 - Date - Date Functions Part 2
console.log('##################### 61 - Date - Date Functions Part 2  ####################');
/*
في هذه الدوال سوف نعطي او نخصص تاريخ وليس نأخذ تاريخ كما في  دوال الـ
get
setDate() // Day of the Month 1-31 // على فرض اعطيناها قيمة 0 سوف يحسب اخر يوم من الشهر السابق لانه خارج نطاق الشهر الحالي
وكذلك اذا اعطيناه قيمة 31 سوف يجلب اول يوم من الشهر التالي وتنطبق هذا المبدأ على جميع الدوال اللاحقة
setDay()  // Day of The Week 0-6 => sun=0 to sat=6
setFullYear(year[req],Month[opt],Day[opt]) // them Months Start form 0-11 is very importent *omsa يبدأ عد الاشهر من الصفر فيجب ان ننتبه حتى لا يقفز على السنه التالية او السابقة
setHours(Hours[req],Mintes[opt],Seconds[opt],Milliseconds[opt]) 
setMintes(’Mintes[req],Seconds[opt],Milliseconds[opt])
setSeconds(ٍSeconds[req],Milliseconds[opt]);
setMilliseconds(Milliseconds[req]) //  from  0-999
setMonth(Month[req],Day[opt]);
*****************************************************
نفس الدوال السابقة ولكن تأتي بالتوقيت العالمي UTC

*/
var x = new Date();
x.setDate(0);
console.log(x); // Tue Dec 31 2019 19: 51: 37 GMT + 0300(GMT + 03: 00) اخر يوم من الشهر السابق
x.setDate(32);
console.log(x); // Wed Jan 01 2020 19:55:28 GMT+0300 (GMT+03:00) اخر يوم في ديسمبر 31 فيأخذ اول يوم  من السنة الجديدة
x.setFullYear(1979, 12, 24);
console.log(x); //Thu Jan 24 1980 20:04:44 GMT+0300 (GMT+03:00) لان اخر يوم من الشهر كان 12 وليس 11 والذي يعتبر اخر يوف فتقدم على السنة الجديدة
x.setFullYear(1979, 6, 24);
console.log(x); //Tue Jul 24 1979 20:06:41 GMT+0300 (GMT+03:00)
x.setHours(24, 60, 59);
console.log(x); //Wed Jul 25 1979 01:00:59 GMT+0300 (GMT+03:00)  بسبب ان كتبت الساعة 24 فكتب اليوم الجديد 25
// وكذلك الحال في الدقائق اعطيناه 60 فأخذ ساعة جديدة
x.setMinutes(10, 60);
console.log(x); //Wed Jul 25 1979 01:11:00 GMT+0300 (GMT+03:00) بسبب الثواني اعطيته 60 وهي المفروض كحد اقصى 59 فأخذ الدقيقة التالية وهي 11 وصفر الثواني
x.setSeconds(27);
console.log(x); //Wed Jul 25 1979 01:11:27 GMT+0300 (GMT+03:00)
x.setMilliseconds(600000); // 600,000 Milliseconds == 10 Seconds
// ((600.000 / 1000) / 60 ) / 60 هذه معادلة تحويل الميلي سيكند الى دقائق
console.log(x); //Wed Jul 25 1979 01:21:27 GMT+0300 (GMT+03:00) بسبب اعطاء اعلى من الرينج اخذ عشر دقائق اضافية
x.setMonth(7, 27); // index of Month Start from 0 - 11 *omsa
console.log(x); //Mon Aug 27 1979 01:21:27 GMT+0300 (GMT+03:00)


// 62 - Date - Date Functions Part 3
console.log('##################### 62 - Date - Date Functions Part 3  ####################');
/*
  1- now = Date.now() : get milliseconds from 1-1- 1970 to now 
      min = 1000 * 60,
      hour = min * 60,
      day = hour * 24,
      month = day * 30,
      year = month * 12;

    2-    now2 = Date.parse(" 1 Oct 1980 12:20:10 ") : نعطي تاريخ كامل والوقت حتى يحسب من تاريخ 1970 وحتى هذا التاريخ
    // دوال لجلب التاريخ بشكل مختصر
    3-  fullDate.toISOString(); // 2020-01-04T18:41:02.825Z
    4- console.log(fullDate.toDateString(); //Sat Jan 04 2020
    5- console.log(fullDate.toTimeString() ; //21:41:02 GMT+0300 (GMT+03:00)
*/
var fullDate = new Date();
now = Date.now(), // this is in milliseconds 
      console.lov
min = 1000 * 60,
      hour = min * 60,
      day = hour * 24,
      month = day * 30,
      year = month * 12;


console.log(Math.round(now / year));

now2 = Date.parse("1 Oct 1980 12:20:10 ");
console.log(Math.round(now2 / year)); //  يعطي التاريخ من 1970 حتى التاريخ المدخل

console.log(fullDate);
console.log(fullDate.toISOString()); // 2020-01-04T18:41:02.825Z
console.log(fullDate.toDateString()); //Sat Jan 04 2020
console.log(fullDate.toTimeString()); //21:41:02 GMT+0300 (GMT+03:00)