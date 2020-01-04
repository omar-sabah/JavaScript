/*global console, alert*/
/*
 There is two ways for create an Array in JavaScript *omsa
 1- consetractor way طريقة قديمة
 var x = new Array("El1", "El2", "El3");
 or
 var x = new Array("El1",
                   "El2", 
                   "El3");
or 
var x = new Array ();
x[0]= "El1";
x[1]= "El2";
x[2]= "El3";

2- litral way طريقة افضل وشائعة الاستخدام 
var x = ["El1", "El2", "El3"];  or 
var x = ["El1", 
         "El2", 
         "El3"];
or
var x = [];
x[0] = "El1";
x[1] = "El2";
x[2] = "El3";
*/
var myName = document.getElementById('name'),
	myColor = document.getElementById('color');

(function getFullName() {
	//sel invok function  & and create array in constractor way *omsa
	fname = new Array('Omar', 'Sabah', 'Almashhadany');
	myName.innerHTML = 'My Full Name Is : ' + fname[0] + ' ' + fname[1] + ' ' + fname[2];
})();

(function getMyColors() {
	//Sef invok fuction & create array in literal way *omsa
	//  fcolor = ["Gold","White",Black]; // or
	fcolor = [];
	fcolor[0] = 'Gold';
	fcolor[1] = 'White';
	fcolor[2] = 'Black';
	myColor.innerHTML = 'My Favorit Colors Is :' + fcolor[0] + ' , ' + fcolor[1] + ' , ' + fcolor[2];
})();

// 26 - Array Check if it is Array or No
(function testArray() {
	/*
        there is two ways for check this is array or ont
        1- if (variable.constructor === Array){}
        2= if (varaiable is Array){ this is the new and the best way *omsa}
    */
	var x = 1;
	var freinds = [ 'omar', 'Ali', 'Ahmed' ];
	if (x.constructor === Array) {
		// this is Old way not used widly *omsa
		console.log('x ' + 'is Array');
	} else {
		console.log('x ' + 'is Not Array');
	}

	if (Array.isArray(freinds)) {
		// this is best way and used widly *omsa
		console.log('freinds ' + 'is Array');
	} else {
		console.log('freinds' + 'is Not Array');
	}
})();
//27 Array [ Get - Set ] Length

(function setGetLenthArray() {
	x = [ 'omar', 'ali', 'ahmed' ];
	y = 'Omar Sabah';
	console.log('y length is : ' + y.length);
	console.log('x is an array length is :' + x.length); // this is Get length of Array *omsa
	x.length = 2; // this is Set of Array for mak shorcut اختصار او تقليص للطول مفيدة جدا
	console.log('x is and array length is : ' + x.length);
})();

// 28 - Array Methods - Convert To String
(function testArray() {
	var freinds = [ 'omar', 'Ali', 'Ahmed', 'Mohammed' ];
	console.log(freinds);
	var myFreinds = freinds.toString();
	console.log(myFreinds);
	var myFreinds2 = freinds.toLocaleString(); //to change Array like your String setting on your Pc
	console.log(myFreinds2);
	var myDate = new Date();
	myDate = myDate.toString();
	console.log(myDate);
	var myDate2 = myDate.toLocaleString(); //بما يتانسب وكتابة التاريخ والوقت في جهازك
	console.log(myDate2);

	var myJoin = freinds.join(); // لربط جميع عناصر المصفوفة في سترنج والفصل بينهم بفاصلو ,
	console.log(myJoin);
	//نستطيع تغير الفاصلة بين العناصر كيفما نشاء
	var myJoin2 = freinds.join('*');
	console.log(myJoin2);
})();

//29 - Array Methods - Add Items
/*
    عملية اضافة عناصر الى مصفوفة تقسم الى 3 مجموعات
    1- اضافة عناصر الى نهاية المصفوفة وتتم عن طريق
    * araryName.length = index of Array + 1 = العنصر الجديد المراد اضافته للمصفوف
    x = ['A','B'];
    x[x.length]='C' >>> x = ['A','B','C']
    *****
    x.push('D'); الطريقة الثانية لاضافةعنصر في اخر المصفوفة
    ******
    2- x.unshift('E'); في هذه الطريقة سيتم اضافة العنصر في بداية المصفوفة
    
    3- ArrayName.splice (index= قم الاندكس للعنصر , how manyh no = عدد العناصر المراد حذفها ابتداء من رقم الاندكس الى نهاية المصفوفة وهذا اختياري ممكن نجعله 0 ,elements العناصر المراد اضافتها قبل الاندكس وايضا اختياري نستطيع عدم كتابتها في حالة عدم وجود عناصر فقط للحذف);
     x.splice (1= 'B', 1= delete 'C', 'M'= add 'M' before 'B');
      splice = لصق paste
    */
var R = [];
R = [ 'Omar', 'Ali' ];
console.log(R);
console.log(R.length); //2
R[R.length] = 'Ahmed'; // add Ahmed to last Array
console.log(R);
console.log(R.length); //3
// the second way for Add an element in to last of Array is push
R.push('Khaled');
console.log(R);
console.log(R.length); //4
R.unshift('Mostafa'); // add Mostafa the first name of R Array
console.log(R);
console.log(R.length); //5 ["Mostafa", "Omar", "Ali", "Ahmed", "Khaled"]
R.splice(2, 3, 'Qasem');
console.log(R);
console.log(R.length); //4 ["Mostafa", "Omar","Qasem"]
R.splice(2, 0, 'Salem', 'Kamel'); // do not delete Qasem and any element after it and insert 'Salem' befor it
console.log(R);
console.log(R.length); //5 ["Mostafa", "Omar","Salem","Kamel","Qasem",]

////  30-Array Remove Items حذف عنصر من المصفوفة
/**
 * لحذف اي عنصر من المصفوفة توجد ثلاثة طرق 
 * 1- حضذف عنصر بمكان محدد بالمصفوفة ثاني عنصر رابع عنصر والى اخره نستخدم
 * splice :كما شرحناها في مثال الاضافة السابق ولكن هنا سوف نحدد فقط رقم الاندكس وعدد العناصر المراد حذفها 
 * 
 * 2- حذف عنصر في نهاية المصفوفة نستخدم 
 * pop :   arrayName.pop(); >> سيحذف اخر عنصر في المصفوفة >>
 * var lastItem = arrayName.pop();
 * console.log(lastItem);
 * 
 * 3- حذف اول عنصر في المصفوفة
 * shift : كما شرحناها في السابق لاضافة عنصر في اول المصفوفة هنا نستخدمها لحذف اول عنصر في المصفوفة وكذلك لمعرفة قيمة اول عنصر في المصفوف
 * arrayName.shift(); >> لحذف اول عنصر في المصفوفة
 * var  firstItem = arrayNme.shift();
 * console.log(firstItem);
 * 
 */
var myNo = [];
myNo = [ 1, 2, 3, 10, 15 ];
console.log(myNo);
console.log(myNo.length);
// 1 delete with splice    *omsa
myNo.splice(3, 1); //just delete 10
console.log(myNo); // [1, 2, 3, 15]
console.log(myNo.length); // 4

//2- delete with pop for delete last item in an array

var lastItem = myNo.pop(); // just delete 15  *omsa
console.log(myNo); //  [1, 2, 3]
console.log(myNo.length); // 3
console.log(lastItem);

// - delete with shift for delete first item in an array *omsa
var firstItem = myNo.shift(); // just delete 1
console.log(myNo); // [2,3]
console.log(myNo.length); //2
console.log(firstItem); //1

/// 31 - Array Sort   ترتيب عناصر المصفوفة

var fr = [ 'omar', 'Esam', 'Mahmod', 'Salem', 'Dema', 'Bashar', 'Ahmed' ];
console.log(fr);

//ترتيب تصاعدي حسبة الابجدية
var sortFr = fr.sort(); // sort from A to Z
console.log(sortFr);

// ترتيب عكسي
var revFr = fr.reverse();
console.log(revFr); //reverse from Z to A

// 32 - Array Combine And Slice قطع جزء من المصفوفة ودمج اكثر من مصفوفة
/**
 * من الجدير بالذكر اننا نستطيع قراءة الاندكس لاي مصفوفة باتجاهين من اليسار الى اليمين بالارقام العادية وبالعكس بالارقام السالبة والتي تبدأ بسالب واحد وكما يلي
 * 
 *    index >>     =  [ 0  ,  1  ,  2  , 3 ]   Read  from left to right  * omsa
 * var  myArray = [ 'A' , 'B' , 'C' , 'D' ]
 *   index <<     = [ -4  , -3 ,  -2 , -1 ]   Read form right to left   *omsa
 * 
 * نستطيع القراءة باي طريقة نشاء 
 * 
 * 1- عندما نريد قظع جزء من المصفوفة 
 * myArray.slice ( نهاية القطع ولا يدخل بالقطع ونستطيع عدم كتابته , بداية القطع ويجب كتابتة);
 *  
 * 2- لدمج اكثر من مصفوفة في مصفوفة واحدة نستخدم
 *    var allArray = arrayName1.concat(arrayName2,arrayName3,....);
 * سيتم دمج الجميع في مصفوفة واحدة
 */
var mycoworkrs = [ 'Omar', 'Ali', 'Rana', 'Moslem', 'Salem', 'Basm' ];
var myFreinds3 = [ 'Mohsen', 'Khaled', 'Abdulah' ];
console.log(mycoworkrs); // ["Omar", "Ali", "Rana", "Moslem", "Salem", "Basm"]
console.log(myFreinds3);
//console.log(mycoworkrs.slice(0, 4)); //  ["Omar", "Ali", "Rana", "Moslem"]
//console.log(mycoworkrs.slice(1)); //["Ali", "Rana", "Moslem", "Salem", "Basm"]
//console.log(mycoworkrs.slice(-5, -2)); //["Ali", "Rana", "Moslem"]
// لدمج اكثر من مصفوفة مع بعض
var allArray = mycoworkrs.concat(myFreinds3);
console.log(allArray);

/// 33 - Array Search

/**
 * للبحث في اي مصفوفة نستعمل اولا القيمة المراد البحث عنها وبالتالي في حالة كانت موجودة سيتم ارجاع رقم الاندكس لهذه القيمة
 * ويتم البحث بطريقتين
 * 1 - arrayName.indexof('valu',index of start search optional): هنا يتم البحث من البداية الى النهاية ممكن 
 * ان نضع رقم الاندكس الذي نبدأ به عملية البحث او لانكتبه فتتم عملية البحث من البداية حتى النهاية
 * 
 * 
 * 2- arrayNaame.lasIndexof ('value',index of stata search optional); نفس الكلام السابق ولكن الفرق
 * سيكون في عملية البحث ستبدأ من نهاية المصفوفة الى بدايتها
 * 
 * Note : الملاحظة المهمة هي ان عملية البحث في المصفوفة ستجلب اول قيمة تتطابق مع قيمة البحث المدخلة وترجع الاندكس 
 * التابع لهذه القيمة وبالتالي لو كانت القيمة مكررة في المصفوفة فانها سترجع فيمة واحدة وهي فقط التي ستجدها دالة البحث 
 * 
 * هذه العملية مهمة جدا في الصفحات نستفاد منها مثلا في ايجاد كلمة معينه في صفحة واعطائها لون مختلف في اي مكان توجد فيه في الموقع
 */

var freinds4 = [
	'Omar', // index [0]
	'Ali', // index [1]
	'Majdy', // index [2]
	'Khaled', // index [3]
	'Mahmod', // index [4]
	'Soha', // index [5]
	'Ali', // index [6]
	'Lyla', // index [7]
	'Khaled', // index [8]
	'Mostafa' // index [9]
];

console.log('All My Freinds are :  ' + freinds4.join(' - '));
var myFavoritFreind = freinds4.indexOf('Majdy'); //search from start >>to End return it's index
console.log(' My Favorit Freind is  :  ' + freinds4[myFavoritFreind]);
console.log(myFavoritFreind); // 2 his index
var myFavoritFreind2 = freinds4.lastIndexOf('Ali', 5); //search form End << to Start retun it's index And strt search form 5index
console.log(' My Favorit Freind is  :  ' + freinds4[myFavoritFreind2]);
console.log(myFavoritFreind2); // 1 his index

////34 - Array Methods Practice
var z = [ 2, 5, 6 ];
// to check is array or Not

if (Array.isArray(z)) {
	console.log('This is an array');
} else {
	console.log('This is Not array');
}

// Set & Get
console.log(z.length); // get Array length
console.log((z.length = 2)); //  Set z made it 2 item delete the last item
console.log(z);

//to Strign or toLocaleString
console.log(z.toString());
console.log(z.toLocaleString());
(d = new Date()), (myDate = d.toLocaleString());
console.log(d.toString()); // يطبع التاريخ بوضع السترنج
console.log(myDate); // يطبع التاريخ حسب تاريخ حاسبتك اي بنص التاريخ الذي انت كاتبه

//Add new item to Array اضافة عنصر جديد
z[2] = 6; // first way *omsa
console.log(z);
z[z.length] = 9; //second way *omsa
console.log(z);
z.push(8); // third way *omsa
console.log(z);
z.unshift(1); // fivth way add one item on the first array *omsa
console.log(z);
z.splice(1, 0, 10); //1: indtex of item array ,  0 : don't delete any item after indexn , 10 : the  item that we want to add before index no *omsa
console.log(z); //[1, 10, 2, 5, 6, 9, 8]

//delete item form Array حذف عنصر من المصفوفة

z.splice(4, 2); //edelet  index [4] & [5] from array z *omsa
console.log(z); // [1, 10, 2, 5, 8]
z.pop(); // delete the last item in z *omsa
console.log(z); // [1, 10, 2, 5]
z.shift(); // delete the first item in z *osma
console.log(z); // [ 10, 2, 5]
z.push(7, 3, 4);
console.log(z); //[10, 2, 5, 7, 3, 4]

// Sort Array ترتيب العناصر

console.log(z.sort()); //[10, 2, 3, 4, 5, 7] // ترتيب تصاعدي هنا لا يرتب العناصر حسب الارقام بشكل صحيح يعتبر 10 تبدا برقم 1 يجلبها بالبداية

// ترتيب تنازلي عكس المصفوفة
console.log(z.reverse()); //[7, 5, 4, 3, 2, 10]

/// combine & Slice  قطع ودمج المصفوفات
console.log(z);
console.log(z.slice(1)); //    [5, 4, 3, 2, 10] قطع فقط من اندكس 1 للنهاية
console.log(z.slice(1, 4)); //[5, 4, 3]  قطع من الانديكس 1 الى الاندكس 4 ويكون غير داخل بالقطع
console.log(z.slice(-5, -1)); // [5, 4, 3, 2]
//console.log(z);

// دمج اكثر من مصفوفة
console.log(z);
var newAraay = [ 3, 12, 14, 8 ];
var all = z.concat(newAraay); // دمج المصفوفة الثانية ويه الاولى
console.log(all); // [7, 5, 4, 3, 2, 10, 3, 12, 14, 8]

// البحث

console.log(all.indexOf(3)); /// search form left to right 3
console.log(all.lastIndexOf(3, 5)); //search from right to left 3 and start search from index 5
