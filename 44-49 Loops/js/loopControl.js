   /*global console, alert*/
   //   #48 - Loop - Control

   /*
      1- break Syntax : 
           break ;    //  للخروج من تنفيذ اللوب مع اللغاء قيمة الشرط التي نقارن عليها
      2- continue Syntax : 
           continue ; // لاكمال اللوب مع الغاء قيمة الشرط التي نقارن عليها
      3- label control Syntax :
           labelName :    // لتقسيم الكود الى اقساء واعطاء كل قسم اسم معين نستطيع التحكم فيه من خلال الـ
                                      break ;  & continue;      
     */
   console.log('#################### #48 - Loop - Control  #######################');

   var i;
   for (i = 0; i <= 5; i++) {
       if (i === 3) {
           break;
       }
       console.log(i); // pring just 012
   }

   console.log('*******************  Countinue **************************');
   var j, x;
   for (j = 0; j <= 10; j++) {
       x = j % 2;
       if (x === 0) {
           continue; // اذا باقي القسمة يساوي صفر اعبر الرقم
       }
       console.log(j); // // print jus odd numbers 13579
   }
   console.log('******************* Label Control **************************');
   var a, b;
   mainloop:
       for (a = 1; a <= 5; a++) {

           secondloop: for (b = 1; b <= 5; b++) {
               if (a === 3) {
                   break mainloop; // يوقف اللوب الرئيسي في حالة وصول القيمة 3 وبالتالي يعطي دورتين 2 فقط لان القيمة الثالثة خارجة
               }
               if (b === 3) {
                   break secondloop; // هنا سوف يأخذ فقط قيمة 1 و 2 من اللوب الداخلي لان الشرط هو 3 غير داخل 
                   // 1    2      1  2      هذه النتيجة النهائية للبرنامج
               }
               console.log(a + " : " + b);

           }
           console.log("********************");
       }