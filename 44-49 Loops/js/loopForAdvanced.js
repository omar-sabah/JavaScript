/*global console, alert*/

// 46 - Loop - For Advanced
/**
 *  1 - نستطيع كتابة الفور باختصار كما يلي
 *    var i = 0; 
 *    for (  ;  ;  ) {
 *     if (i >= 10) break ;  // شرط التوقف والخروج
 *      console.log ( i );
 *     i ++ ;  // الزيادة بمقدار 1 
 *       
 * }
 * 
 * 
 *  2 - سوف نعمل على خلق عنصر لست جديد من خلال  document.write (" <>");
 *     وللعلم انها ليست الطريقة المثلى لخلق العناصر ولكنها من باب التعليم فقط
 * 
 *
 */
console.log('#################### // 46 - Loop - For Advanced  #######################');
var i = 0;
for (;;) {
    if (i >= 10) break; // شرط التوقف والخروج
    console.log(i);
    i++; // الزيادة بمقدار 1 
}
console.log('#################### // document.write()  #######################');

var btn = document.getElementById('buidList'),
    selectDiv = document.getElementById("forAdvanced");

btn.onclick = function () {
    var start = document.getElementById('startYear').value,
        end = document.getElementById('endYear').value;
    // console.log(input1 + " " + input2);
    document.write("<select>");
    var years;
    for (years = start; years <= end; years++) {

        document.write("<Option value =\""  + years +  "\" >" + years + "</Option>");

    }
    document.write("</select>");

};