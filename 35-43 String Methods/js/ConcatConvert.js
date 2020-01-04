  /*global console, alert*/

  //39 - Strings Methods - Concatenating
  /*
   *  String.formCharCode(Num1,Num2,Num3,...); كتابة كلمة من خلال كود الحروف وتجميعهم من خلال هذه الدالة لتخرج كلمة
   * stringName.concat(string1,string2,string3); تجميع اكثرمن جملة ودمجهم مع جملة اخرى
   */
  //40 - Strings Methods - Convert Letters
  /**
   *
   var massage1 = "I Love JavaScript";
   console.log(massage1.toLowerCase()); // i love javascript
   console.log(massage1.toLocaleLowerCase()); // i love javascript تنفع في اللغات الغريبة مثل التركية وما شابه
   console.log(massage1.toUpperCase()); //I LOVE JAVASCRIPT
   console.log(massage1.toLocaleUpperCase()); // I LOVE JAVASCRIPT   تنفع في اللغات الغريبة مثل التركية وما شابه
   */

  //  I want to write my name Omar   from charCode
  var myName = String.fromCharCode(79, 109, 97, 114); // O=79,m=109,a=97,r = 114 
  console.log(myName); //Omar

  var intro = " I'm developer my name is ",
    lastIntro = "I have experience in ",
    languages = "HTML , CSS , JavaScript , PHP.",
    myCv = intro.concat(intro, myName, lastIntro, languages); // لدمج الجمل
  console.log(myCv); // I'm developer my name is  I'm developer my name is OmarI have experience in HTML , CSS , JavaScript , PHP.

  // change to lwercase ;
  var massage1 = "I Love JavaScript";
  console.log(massage1.toLowerCase()); // i love javascript
  console.log(massage1.toLocaleLowerCase()); // i love javascript تنفع في اللغات الغريبة مثل التركية وما شابه
  console.log(massage1.toUpperCase()); //I LOVE JAVASCRIPT
  console.log(massage1.toLocaleUpperCase()); // I LOVE JAVASCRIPT   تنفع في اللغات الغريبة مثل التركية وما شابه