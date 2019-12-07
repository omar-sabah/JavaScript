/*global console, alert*/
// ****************************Start IF..Else Statment (Condition)**************************************
/*
 القاعدة الرئيسة لكتابة اف الشرطية كما يلى

 if (Condition1) { اذا تحقق الشرط الاول
  code1 ;        نفذ الكود الاول
} elseif(Condition2){ اذا لم يتحقق الشرط الاول وتحقق الشرط الثاني
  code2 ;        نفذ الكود الثاني
}else{          اذا لم يتحقق الشرطان السابقين بكل الاحوال
  code3 ;        نفذ الكود الثالث
}

هذا الهيكل المتكامل لدالة اف الشرطية نستطيع استخدام اجزاء من هذا
الهيكل حسب الحاجة من الممكن كتابة
if(condition){
code ;
}
    او
if(condition){
code1 ;
}else {
code2;
}
*/
var yourAge = prompt('Enter your Age'); // دالة لادخال بيانات في تيكست اعلى الصفحة

if (yourAge < 18){ // اذا كان عمرك اقل من 18 سنة
  //ستظهر رسالة اعتذار انك غير مسموح لك استخدام هذه الصفحة
  document.getElementById('ifst').innerHTML =
  "Sorry Your Age " + yourAge + " You Are Not Allowed Here";
  //ستظهر نفس العبارة في الكونسول التابع للصفحة
  console.log("Sorry Your Age " + yourAge + " You Are Not Allowed Here");
}else if (yourAge >= 18) { //اذا لم يكن عمرك اقل من 18 وعمرك اكبرمن او يساوي 18 سنة
  //ستظهر رسالة ترحيب بك بالصفحة
  document.getElementById('ifst').innerHTML =
  "Your Age " + yourAge + " You Are Welcome Here";
  //ستظهر نفس العبارة في الكونسول التابع للصفحة
  console.log("Your Age " + yourAge + " You Are Welcome Here");

} else{ //اذا لم يكن المدخل رقم ستظهر رسالة اعتذار وتطلب منك اعادة تحميل الصفحة والادخال من حديد
  document.getElementById('ifst').innerHTML =
  "Sorry You Can Reload This Page and Enter Your Age Agin";
  //ستظهر نفس العبارة في الكونسول التابع للصفحة
  console.log("Sorry You Can Reload This Page and Enter Your Age Agin");

}















// ****************************End IF..Else Statment (Condition)**************************************
