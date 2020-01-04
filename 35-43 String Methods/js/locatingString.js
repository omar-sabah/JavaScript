/*global console, alert*/
// 36 - Strings Methods - Locate A String  للبحث عن كلمة او حرف داخل السترنج
/**
 *  Syntax  :  indexOf(value,start position) ; search  form  first  >>to>>    Defult = 0
 * Syntax :   lastIndexOf(value, start position); search form  first << to << last  Defult = 0
 * Syntax : search(value); search from first >>to>> last 
 * نتيجة البحث ستكون رقم الاندكس للحرف الاول لبداية الكلمة ويرجع قيمة واحدة 
 * اي ان اذا كانت هناك اكثر من كلمة في الجملة يرجع قيمة او نتتيجة يجدها بالبحث
 * عملية البحث حساسة لحالة الاحرف اي يجب ان تكون القيمة المراد البحث عنها تطابق تماما الكلمة في الجملة
 * وفي مراحل متقدمة سوف نتعلم كيفية الغاء خاصية الحساسية لحالة الاحرف
 * في حالة كانت الكلمة المراد البحث عنها غير موجودة سيرجع قيمة 
 * -1
 */

var myString = "I'm in love with JavaScript love with PHP";

var myword1 = myString.indexOf('love'); // 7 رقم الاندكس لبداية الكلمة وسيبدا من البداية حتى النهاية لاننا لم نحدد رقم بداية البحث
console.log(myword1);
var myword2 = myString.indexOf("love", 15);
console.log(myword2); // 28 لانه بدء البحث من الاندكس رقم 15 يعنى تخطى الكلمة الاولى وايضا يكون البحث من البداية الى النهاية
var myword3 = myString.lastIndexOf("love", 35); // 28 لان البحث بدأ من النهاية
console.log(myword3);
var myword4 = myString.lastIndexOf("love", 27); // 28 لان البحث بدأ من النهاية
console.log(myword4); // 7
var myword5 = myString.search("love"); // 7 لان البحث بدأ من البداية
console.log(myword5);