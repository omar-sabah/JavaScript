/*global console, alert*/
/*jslint plusplus : true */ //حتى يشتغل i++ بدون مشاكل 


//44 - Loop - For
/**
 *   loop For Syntax : for (Initialization ; Condition ; Final Expression  ) {
 *         code Statment ;
 *          }
 * Initialization : القيمة الابتدائية للمتغير الذي يشغل اللوب
 * 
 * Condition : شرط التوقف
 * 
 * Final Expression : العملية التي سوف تنفذ اذ لم يتحقق اللوب
 */

console.log('#################### 44 - Loop - For #######################');
var i;
for (i = 20; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(i); //يطبع العناصر الفردية والتي تكون اصغر من العشرون واكبر من او تساوي الصفر
    }
}
var friends = ['omar', 'Ali', 'Mohamed', 'Dhoha', 'Saif'],
    j;
for (j = 0; j < friends.length; j++) {
    console.log(friends[j]); // يطبع عناصر مصفوفة الاصدقاء
}