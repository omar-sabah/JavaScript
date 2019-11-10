/*شرح القواعد الصحيحة لكتابة الكود بالجافاسكربت*/
/*
1- لايجوز ترك مسافة من اليسار ويتم حل المشكلة بعد ترتيب الكود بالاديتور

*/
/*يفضل اضافة فارزة بين المتغيرات من نفس النوع بدل كتابة
         var
         Multi line comment
        مع كل متغير*/
var x=10,
    y=50,
    z=x+y;
// جافاسكربت حساسة لحالة الاحرف name لا تساوي Name    Single line comment
var name="omar",Name="Ahmed" ;
/* طريقة كتابة اسماء المتغيرات والفانكشنات والكلاسات بطريقة الجمل
   omarSabah,myFunctionIs,getElementById
   اي لا يجود فصل بين الكلمات بل تدمج ولكن بداية كل كلمة بحرف كبير
   وهذا عرف برمجي وليس قاعدة ثابتة ولكن من المتعارف عليه بين
   اوساط المبرمجين*/
document.getElementById("div1").innerHTML = "Hello JavaScript From js File";
document.getElementById("div2").innerHTML = z;//سيطبع قيمةz =30
document.getElementById("div3").innerHTML = name; //سيطبع omar

/*الشروط if Statment*/
if (x+y===60) {
  console.log("good"); //سيطبع الكلمة في اللوك عند فتحة بالكروم
}else {
  console.log("bad");
}
