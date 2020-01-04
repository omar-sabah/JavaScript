/*global console, alert*/

// 43 - Strings Methods - Practice

/*
 * 
 */
console.log("********************* 43 - Strings Methods - Practice ******************");
console.log('1 - Add \ befor spcial char in string');
var myString = "I love \*\& programming \&\* languages";
console.log(myString);

console.log('2 - Find type of variable ');
console.log(typeof (myString));

console.log('3 -  Search in String and find a word ');
var mySearch = myString.indexOf("love", 0);
console.log(mySearch);
var mySearch2 = myString.lastIndexOf("l", 40);
console.log(mySearch2);
var mySearch3 = myString.search("l");
console.log(mySearch3);

console.log(' 4 - split ');

xString = "Omar Sabah Salman";
myFullName = xString.split(" ", 2);
console.log(myFullName);

console.log(' 5- slice  And substring ');
var mySlice = xString.slice(0, 10);
var mySubsting = xString.substring(10, 0);
console.log(mySlice);
console.log(mySubsting);

console.log(' 6 - substr() ');
var mySubstr = xString.substr(5, 8);
mySubstr2 = xString.substr(-5);
console.log(mySubstr);
console.log(mySubstr2);

console.log(' 6 - find  charAt()  , charCodeAt()');
var myFind = xString.charAt(2),
    myFind2 = xString.charCodeAt(2); //Return the uniCode
console.log(myFind);
console.log(myFind2);

console.log(' 7 - replace()');
var myReplace = xString.replace(/a/g, 'z');
console.log(myReplace);

console.log(' 8 - concat() , toUpperCase(),toLowerCase() ,chain');
var myConcat = xString.concat(" is developer").toLowerCase().toUpperCase().split(" ", 3);
console.log(myConcat);

console.log(' 7 - trim() , link');
var x = "      javascript is the best language      ";
var mylink = x.link('http:\\ www.google.com');
console.log(x);
console.log(x.trim());
console.log(mylink);