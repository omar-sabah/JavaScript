/*global console, alert, prompt */
// self invok ونقصد فيها تشغيل الفانكشن بشكل تلقائي بدون استخدام ايفنت معين مثل البوتوم مثلا فتعمل هذه الفانكشن عند تحميل الصفحة مباشرتا
/* توجد نوعين المن الفانكشن الموجودة في الجافاسكربت
 * 1- bult in function وتكون موجودة داخل اللغة فقط نستدعيها ونستخدمها مثل 
 * Math.random(); للحصول على رقم عشوائي 
 * 2- defined function وهي الفانكشن التي نعرفها نحن ونستدعيها لاداء مهمة معينة كما في الامثلة السابقة والحالية
 * قاعدة جعل الفانكشن تعمل بدون حدث تكون كالتالي
 * ( كتابة الفانكشن بالكامل  () ); === self invok 
 */
(function myFunc() {
    'use strict';
    alert('My Name is Omar Sabah: this function is self invok');
})();
(function gtTrPrice() {
    'use strict';
    var price = document.getElementById('dollar1').innerHTML;
    console.log(price);
    var trprice = price * 5.72,
        lira = document.getElementById('tr1'); //هنا نختصر جملة الادخال بمتغير ونستخدمة طبيعي
    lira.innerHTML = trprice;

}());

function calcPrice() {

    var amount = document.getElementById('dollar').value,
        message = document.getElementById('message'),
        result = amount * 5.73;
    // condetion input
    if (amount === "") {
        message.innerHTML = "The input Text is Empty";
    } else if (isNaN(amount)) { // is nan mean that amount is not number 
        message.innerHTML = "The input Text is not number";
    } else if (amount === 0 || amount === "0") {
        message.innerHTML = "The input value does not be 0";
    } else if (amount < 0) {
        message.innerHTML = "The value must not be Nagative number";
    } else if (amount > 10000) {
        message.innerHTML = "The input value greater than 10.000";
    } else {
        message.innerHTML = amount + ' Dollar' + 'is woth ' + result + ' Turkish Lira';
    }







}