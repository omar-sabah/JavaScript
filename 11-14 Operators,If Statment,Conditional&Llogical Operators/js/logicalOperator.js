/*global console, alert*/
 /*
  (!) Not Equal علامة عدم المساواة ولها تفاصيل
  (!=) علامة لا يساوي بالقيمة فقط
  (!==) علامة لايساوي لا بالقيمة ولا بالنوع
  (|| = OR ) تستخدم لتحقق واحد من شرطين
  (&& = AND) تخسدم للتحقق كل الشروط
 */
 var age = 25;
 if (age != 30) { // يقصد بالقيمة الحقيقية
   document.getElementById('lp1').innerHTML = 'Result = ' + 'Good';
  }
 else {
    document.getElementById('lp1').innerHTML = 'Result = ' + 'Bad';
 }
 age = "25";
 if (age !== "25") { // هنا يقصد عدم المساواة بالقيمة والنوع وهنا النوع سترنج
   document.getElementById('lp2').innerHTML = 'Result = ' + 'Good';
  }
 else {
    document.getElementById('lp2').innerHTML = 'Result = ' + 'Bad';
 }
 var age = 32 , name = "Ali";

  if (age == 32 || name == "Omar"){
    document.getElementById('lp3').innerHTML = 'Result = ' + 'Good';
  } else {
      document.getElementById('lp3').innerHTML = 'Result = ' + 'Bad';
  }
  /***********************************************************************/
  if (age == 32 && name == "Omar"){
    document.getElementById('lp4').innerHTML = 'Result = ' + 'Good';
  } else {
      document.getElementById('lp4').innerHTML = 'Result = ' + 'Bad';
  }
