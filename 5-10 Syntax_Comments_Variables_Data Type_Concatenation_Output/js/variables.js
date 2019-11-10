/* global console,alert */

/*
  Variables
  1- Start with laters,underscore,$

*/
var myPrice; //Undefined variable متغير غير معرف لا يحتوي على قيمة

//(=) assignment operator

/*  الكلمات المحجوزة في اللغة لا يجوز استخدامها كمتغير
  var,if,while,for,

*/
var // my product Price
  myOldPrice = 2000,
  myNewPrice = 900,
  kdvPrice = 500, //مبلغ الضريبة
  myDiscount = myOldPrice - myNewPrice; //1100

document.getElementById("oldprice").innerHTML = myOldPrice;
document.getElementById("newprice").innerHTML = myNewPrice;
document.getElementById("Discount").innerHTML = myDiscount;
document.getElementById("kdv").innerHTML = kdvPrice; //الضريبة
document.getElementById("total").innerHTML = myDiscount + kdvPrice; //جمع الضريبة مع المبلغ بعد التخفيض
/*****************************************************************/
var
  mainPrice = 500,
  mySmallDiscount = 50,
  myMediumDiscount = 100,
  myBigDiscount = 250;

document.getElementById("mainprice").innerHTML = mainPrice;
document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount; //450
document.getElementById("product2").innerHTML = mainPrice + myMediumDiscount; //600
document.getElementById("product3").innerHTML = mainPrice / myBigDiscount; //2
document.getElementById("product4").innerHTML = mainPrice % myBigDiscount; //0 الباقي من القسمة
document.getElementById("product5").innerHTML = mainPrice * myBigDiscount; //125000
