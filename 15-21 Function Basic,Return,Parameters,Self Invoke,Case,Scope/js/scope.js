/*global console, alert, prompt */

/*
 * تعريف مجال المتغيرات في جافا سكربت الى مجال عام و خاص 
 * المجال العام نقصد انه مرئي من قبل جميع الفانكشنات في الملف 
 * المجال الخاص يقصد فيه ان يكون المتغير مرئي داخل الدالة فقط ولا يمكن الوصول اليه من الخارج
 * scope dvided to Global scope - Local scope
 */
var myName = 'Omar >>> Global Scope';
var x = 100,
	a = 3,
	b = 5,
	c = 7; // Access to these from Any where omsa
// Scope A
function printName() {
	'use strict';
	var myName = 'Ali >>> Lcoal Scope';
	document.getElementById('name2').innerHTML = myName;

	x = 200; // هذا المتغير هو العام بالاصل لانه تم استدعائه من غير الفار
	// وتم تحويل قيمته الى 200 في جميع الخطوات البرمجية اللاحقة

	// عند ازالة الـ
	//var من اي متغير يتحول الى عام وليس خاص بالدالة
}
function textFunc() {
	'use strict';
	var a = 8; //Local scope
	b = 12;
	var calc = a + 2; // 8+2 = 10
	var calc2 = b * 2;
	console.log('calc =  ' + calc);
	console.log('calc2 =  ' + calc2);
}
/// Create function in Function خلق دالة داخل دالة
function testFirst() {
	'use strict';
	// Scope B Access to this Scope from Scop A , B  omsa
	var c = 12;
	function testSecond() {
		'use strict';
		// Scope C Access to this Scope from Scope B , C
		console.log(c); // Access to Scope B c = 12 *omsa
		return c * 3;
	}
	return testSecond(); // form run testSecond() when I call testFirst() *omsa
}

// How to create multi Fuctions in One & Get The Result *omsa

function fullName() {
	var lastName = 'ALMASHHADANY';
	function getFrScName() {
		var firstName = 'Omar',
			secondName = 'Sabah';
		function getSecondName() {
			return secondName; // get Sabah
		}
		return firstName + ' ' + getSecondName(); // get Omar Sabah
	}
	function getLastName() {
		lastName = 'Salman'; // cahnge value of lastNmae form ALMASHHADANY to Salman *omsa
		return lastName;
	}
	return getFrScName() + ' ' + getLastName(); // Result of fullName() = Omar Sabah Salman *omsa
}
console.log(fullName()); // Omar Sabah Salman
console.log(testFirst()); //result = 12 & 36
printName(); //وسيتم تنفيذ الدالة ثانيا
document.getElementById('name1').innerHTML = myName;
console.log('b = ' + (b - 4)); // 5 -4
textFunc();
console.log(a + 7); // 3 + 7 = 10
console.log(b - 4); // in textFunc b will be equil = 12   - 4 =8
