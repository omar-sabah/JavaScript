/*global console, alert, prompt */

function getMyInfo() {
	'use strict'; // سيتم شرحها لاحقا
	// هنا لجلب قيمة الانبوت ووضعها داخل متغير
	var firstName = document.getElementById('fname').value,
		lastName = document.getElementById('lname').value,
		fAge = document.getElementById('fage').value;
	// لاستدعاء الفانكشن  وادخال باريمتراتها فداخل الايدي
	document.getElementById('myinfo').innerHTML = calcInfo(firstName, lastName, fAge);
}

function calcInfo(firstName, lastName, yourAge) {
	'use strict'; // سيتم شرحها لاحقا
	return (
		'Your Full Name : ' +
		firstName +
		' ' +
		lastName +
		'<br>' +
		'Your Age in years : ' +
		yourAge * 12 +
		'<br>' +
		'Your Age in Months : ' +
		yourAge +
		'<br>' +
		'you Age in Days : ' +
		yourAge * 365 +
		'<br>' +
		'you Age in Hours : ' +
		yourAge * 365 * 24 +
		'<br>' +
		'you Age in Mintes : ' +
		yourAge * 365 * 24 * 60 +
		'<br>' +
		'you Age in Seconds : ' +
		yourAge * 365 * 24 * 60 * 60
	);
}

function calcPrice(discount) {
	'use strict'; // سيتم شرحها لاحقا
	var price = 1000;
	return price - discount;
}
var dicountPrice = prompt('insert Price of discount');
document.getElementById('total').innerHTML = 'Total Price After Discount = ' + calcPrice(dicountPrice);