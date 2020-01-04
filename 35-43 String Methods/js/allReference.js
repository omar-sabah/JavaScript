/*global console, alert*/

// 41 - Strings Methods - All Reference

/**
 *  * stringName .trim(): لازالة الفراغات قبل وبعد السترنغ
 *
 * stringName.link("http:\\www.google.com") : لتحويل السترنغ الى لنك نستطيع الوصول اليه من خلال الضغط على هذا السترنغ
*   
*    https://developer.mozilla.org/en-US/    : موقع لاحتراف لغات البرمجة للويب
 */
var myString = '                    I love JavaScrpit              ';
console.log(myString);
var myNewString = myString.trim();
console.log(myNewString);

var myLinkName = 'Google';
var myLink = myLinkName.link('http:\\www.google.com');
console.log(myLinkName + '  link is  ' + myLink);
