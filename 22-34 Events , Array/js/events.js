/*global console, alert*/
/* 
توجد الكثير من الاحداث في الجافا سكربت
سنتناول الابرز والاكثر استخداما
window.onload = function(){ يتم تنفيذ الكود عند تحميل الصفحة}

*/
var runId = this.document.getElementById('test'); // make short code for doc *omsa

window.onload = function() {
	// Run this code when page is loading *omsa
	runId.innerHTML = 'This is Events Lesons in JavaScript';
};

function oneClick() {
	runId.innerHTML = 'You Are doing One Click'; // run when user do one click on button *omsa
}

function dubleClick() {
	runId.innerHTML = 'You Are doing Duble Click'; // run when user do dubleclick on button *omsa
}

/* توجد طريقة بدل كتابة اسم الفانكشن في ملف 
//HTML >>> نعمل اي دي للعنصر  
idName.event = function (){ هنا نكتب ما نريد تنفيذه}
*/
var myInput = this.document.getElementById('input'), // for input the value in variable *omsa
	myResult = this.document.getElementById('tr'),
	myButton = this.document.getElementById('calc');

myButton.onclick = function() {
	myResult.innerHTML = myInput.value * 5.72;
};
var myInput2 = this.document.getElementById('input2'), // for input the value in variable *omsa
	myResult2 = this.document.getElementById('tr2');

/* onkeyup : يستعمل في العمليات الحسابية يتم التنفيذ بمجردرفع اليد عن المفتاح
   onkeydawon: يحدث عند بداية الضغط على المفتاح يتم التفيذ يتحتاج انتر ليقوم بالعملية الحسابية بالشكل المضبوط
   onkeypress: يحدث عند بداية الضغط على المفتاح يتم التفيذ يتحتاج انتر ليقوم بالعملية الحسابية بالشكل المضبوط

*/
myInput2.onkeyup = function() {
	myResult2.innerHTML = myInput2.value * 5.72;
};
var myInput3 = document.getElementById('input3');

myInput3.onkeydown = function() {
	alert('you are pressed onkeydwon event');
};
var myInput4 = document.getElementById('input4');

myInput4.onkeypress = function() {
	alert('you are pressed onkeypress event');
};
/* onmouseover, onmouseout, onchange Events
   
onmouseover : عند تحريك الماوس على عنصر معين يحدث

onmouseout : عندما يترك الماوس اي عنصر

onchange  : عند حدوث تغيير على اي عنصر
*/
var myInput5 = document.getElementById('input5'),
	myInput6 = document.getElementById('input6'),
	firstWord = document.getElementById('word1'),
	secondWord = document.getElementById('word2'),
	thirdWord = document.getElementById('word3'),
	myCurrency = document.getElementById('currency');
myResult3 = document.getElementById('result');

firstWord.onmouseover = function() {
	// for input first word in iput5 when mouse be on word1 *omsa
	myInput5.value = firstWord.innerHTML;
};

firstWord.onmouseout = function() {
	// to reset value of imput5 when mouse leave word1 *omsa
	myInput5.value = '';
};
secondWord.onmouseover = function() {
	myInput5.value = secondWord.innerHTML;
};

secondWord.onmouseout = function() {
	myInput5.value = '';
};
thirdWord.onmouseover = function() {
	myInput5.value = thirdWord.innerHTML;
};

thirdWord.onmouseout = function() {
	myInput5.value = '';
};
myCurrency.onchange = function() {
	//	myResult3.innerHTML = myInput6.value * myCurrency.value + '$';

	switch (myCurrency.value) {
		case '1':
			myResult3.innerHTML = myInput6.value * myCurrency.value + '$';
			break;
		case '4.2':
			myResult3.innerHTML = myInput6.value * myCurrency.value + 'YN';
			break;
		case '5.7':
			myResult3.innerHTML = myInput6.value * myCurrency.value + 'TL';
			break;
	}
};
