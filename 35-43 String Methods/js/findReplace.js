/*global console, alert*/

//38 - Strings Methods - Find And Replace
/**
 *   cahrAt(index) : لجلب قيمة الحرف من خلال ادخال الاندكس لهذا الحرف 
 *   stringName.charAt(5);
 * 
 * charCodeAt(index) : لجلب قيمة الكود لهذا الحرف في ألـ
 * HTML ونستطيع التأكد من كود اي حرف او رمز من خلال الموقع التالي
 * https: //unicode-table.com/en/#control-character 
 * stringName.charCodeAt(index);
 * 
 * replace(value,new value) : نستطيع من خلال هذه الدالة استبدال اي قيمة داخل السترنغ باي قيمة جديدة وفي حالة تكرار القيمة القديمة اكثر من مكان سيتم تبديل اول 
 * قيمة فقط واذا اردنا استبدال جميع القيم نستخدم الـ
 * regular Expresion : فيه مواضيع متقدمة وبسيطة في نفس الوقت سنأخذ مثالين للتوضيح
 * /value1/ g : هذا الايعاز سيعمل على مقارنة القيمة المعطاه بكل السترنغ المراد البحث فيه ومن ثم اجراء اي عملية نحتاج
 * /value1/ i : لالغاء حالة التحسس من حالة الاحرف سواء كبيرة او صغية 
 * 
 * stringName.replace ( /omar/ g i, "Ali "); هنا سوف يستبدل قيمة عمر بقيمة على اينما يجده في السترنغ
 * 
 */
var mystring = "I love JavaScript like Python javascript ";
console.log(mystring.charAt(5)); // e
console.log(mystring.charCodeAt(5)); // 101
myreplace = mystring.replace('javaScript ', 'C++');
console.log(myreplace); // لا شيء سيتغير
myreplace2 = mystring.replace(/javaScript/i, 'C++'); // regular expresion الغاء حساسية حالة الاحرف بالبحث
console.log(myreplace2); // I love C++ like Python javascript  فقط اول كلمة 
myreplace3 = mystring.replace(/javaScript/gi, 'C++'); // الغاء حالة الاحرف وايضا البحث الواسع في جميع السترنغ
console.log(myreplace3); // I love C++ like Python C++ 