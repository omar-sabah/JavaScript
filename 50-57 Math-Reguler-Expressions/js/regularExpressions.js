/*global console, alert*/

//  55 - Regular Expression - Intro
/*
التعابير المنطقية 
Regular Expression Syntax : 
 / pattern / attributes: خاصة بعلوم الحاسبات وتستعمل في جميع لغات البرمجة وتستخدم في عمليات
Search | Replace | Match |  Split | Test 
Attributes list 
[ i ] => case insensitive لالغاء حساسية الاحرف
[ g ] => Global Search للبحث في جمع السطر عن كلمة او حرف
[ M ] => Multi Line Search للبحث في اكثر من سطر وسوف نتطرق اليها لاحقا
*/
console.log('############# 55 - Regular Expression - Intro ###################');
var x = "I Love javaScript language";
indexname = x.search(/L/i);
console.log(x);
console.log(indexname); // 2
console.log(x.replace(/l/ig, "@")); // I @ove javaScript @anguage

// 56 - Regular Expression - Brackets
/*
Brackts Use 
[...] Character 
[^...] Not Character
[a-z] Range small Letters
[A - Z] Range Capital Letters
[0 - 9] Range Numbers
[^0 - 9] Not Range Numbers
[A-g] = Range [A-Z] & Range [a-g]
[0-9a-z] Double Range
*/
var y = 'ABCDYKMN0123456789 abcdefjqz';
console.log('############# 56 - Regular Expression - Brackets ###################');
console.log(x.replace(/[A-Z]/g, "@")); //@ @ove java@cript language
console.log(x.replace(/[^A-Z]/g, "@")); //I@L@@@@@@@@S@@@@@@@@@@@@@@
console.log(x.replace(/[a-g]/g, "@")); // I Lov@ j@v@S@ript l@n@u@@@
console.log(y.replace(/[A-g]/g, "#")); //########0123456789 ######jqz
console.log(y.replace(/[0-9a-z]/g, "#")); //ABCDYKMN########## #########
console.log(y.replace(/[^0-9a-z]/g, "#")); // ########0123456789#abcdefjqz

//57 - Regular Expression - Quantifiers
/*
Quantifiers : تحديد مقدار الاحرف او الارقام المراد اجراء عملية عليها مثل تبديلها مثلا
Letter+ => word contin one Letter
Letter{Number} => word contain Number of Letter
Letter{Nmber,Number}=> word contain Number Or Number
Letter{Number,} => word contain At least Number
*/
console.log('############# 57 - Regular Expression - Quantifiers ###################');
var z = "I love javascript too much";
console.log(z);
console.log(z.replace(/o+/g, "&")); // I l&ve javascript t& much
var z1 = "I looove javascript too much";
console.log(z1);
console.log(z1.replace(/o{3}/g, "&")); // I l&ve javascript too much
var z2 = "I loooove javascript tooo much";
console.log(z2);
console.log(z2.replace(/o{2,3}/gi, "&")); // I l&ove javascript t& much
console.log(z2.replace(/o{4,}/gi, "&")); // I l&ve javascript tooo much