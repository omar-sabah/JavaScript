/*global console, alert*/

// 45 - Loop - For In
/**
 *      Object Syntax :    var  ObjectName = {
 *                                                               Key1: property 1,   // الخاصية : المفتاح
 *                                                              Key2 : property 2
 *                                                          }
 * 
 *    var  Xkey ;  نعرف متغير 
 *   For In Syntax :  for ( Xkey in objectName )   //  بينما هذا المتغير يحمل كل مفاتيح الاوبجكت
 *   {
    if (objectName.hasOwnProperty(Xkey))  // مهمة جدا لفلترة الخواص في حالة كانت غير موجودة لا يجلبها 
     {
        console.log(objectName[Xkey]); // هنا سوف يطع جميع الخواص لهذا الاوبجكت

         }
    }

 *   
 */
console.log('####################  45 - Loop - For In #######################');

var myCar = {
	color: 'white',
	type: 'Toyota',
	price: '2500$',
	model: '2018'
};

var prop;
for (prop in myCar) {
	if (myCar.hasOwnProperty(prop)) {
		console.log(prop + ': ' + myCar[prop]);
	}
}
