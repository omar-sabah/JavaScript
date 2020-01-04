/*global console, alert*/

// 37 - Strings Methods - Split A String
/** 
 *  split Syntax :stringName.split( separator , limit )  يستعمل لتحويل السترنغ الى مصفوفة استطيع التحكم بها   
 * separator : هو نوع الفاصلة الذي نحدده للفصل بين العناصر سواء يكون  - او " " او اي فاصلة نحددها  
 * limit : هو الرقم الذي يحدد  العناصر التي اريد ان اظهرها 
 *
 * slice Syntax : stringName.slice ( Start no , End no (Optional)); يبقى نوع العنصر سترنغ
 *  تعمل على قطع جزء من السترنغ 
 * x.slice(-3);  لجلب اخر ثلاثة حروف
 *  substr Syntax : stringName.substr(Start , length(Optional) ) يبقى سترنغ ويقع من البداية ونعطيه مسار او طول القطع كم حرف بدل النهاية
 * * substring Syntax: stringName.substring(Start no, End no(Optional));    يبقى نوع العنصر سترنغ  
  *   تعمل على قطع جزء من السترنغ 
  * whtat is the deferent between slice & substring is : x.slice (19,4 ) ; it's wrong! || x.substring(19,4) == x.substring(4,19);

 *   */

var mystring = "I love JavaScript And Jason",
    mysplit = mystring.split();
console.log(typeof (mystring)); // string
console.log(typeof (mysplit)); // object
console.log(mysplit); //["I love JavaScript And Jason"]
var mysplit2 = mystring.split(" ");
console.log(mysplit2); // ["I", "love", "JavaScript", "And", "Jason"]
var mysplit3 = mystring.split(" ", 3);
console.log(mysplit3); // ["I", "love", "JavaScript"]
console.log(typeof (mysplit3)); //// object
//Slice القطع
var mySlice = mystring.slice();
console.log(typeof (mySlice)); // string
console.log(mySlice); // I love JavaScript And Jason
var mySlice2 = mystring.slice(7); // JavaScript And Jason
console.log(mySlice2);
var mySlice3 = mystring.slice(4, 20); // JavaScript And Jason
console.log(mySlice3);
var mySlice4 = mystring.slice(-5); // Jason   get  last 5 chars *omsa
console.log(mySlice4); // Jason 

// substr
var mysubstr = mystring.substr();
console.log(typeof (mysubstr)); //String
console.log(mysubstr); // I love JavaScript And Jason
var mysubstr2 = mystring.substr(6); // يقطع من رقم 6 الى  النهاية
console.log(mysubstr2); // JavaScript And Jason
var mysubstr3 = mystring.substr(7, 17); // يقطع من الرقم 7 وبطول 10 احرف
console.log(mysubstr3); // JavaScript And 

// substring 
var mysubstring = mystring.substring();
console.log(typeof (mysubstring)); // I love JavaScript And Jason
console.log(mysubstring); //   I love JavaScript And Jason

var mysubstring2 = mystring.substring(8, 24);
console.log(mysubstring2); //   I love JavaScript And Ja

var mysubstring2 = mystring.substring(24, 8); // وهذا لاينفع مع الـ slice 
console.log(mysubstring2); //   I love JavaScript And Ja