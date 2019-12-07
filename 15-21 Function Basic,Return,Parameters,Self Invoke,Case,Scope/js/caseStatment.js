/*global console, alert, prompt */

/*
Syntax of switch case is

switch (Expressoin){


    case x1 :    if x1 is true 
        code ;   Run this code 
        break;   and break and exit from case 

    case x2 :    if x2 is true 
        code ;   Run this code 
        break;   and break and exit from case
    
     case x3 :    if x3 is true 
        code ;   Run this code 
        break;   and break and exit from case    
        
    default : if x1,x2,x3 is false 
       code ;  Run this code  
       break;  adn break and exit from case
}
           نستطيع دمع اكثر من كيس في حالة كانت الشروط هذا او هذه
           case "1":    بمعنى كانت القيمة 1 او 2 نفذ نفس الكود
           case "2":
               Run this code;
               break;
*/


var season = prompt("What is the favorite season for you select on of {Winter-sammer-Autumn-spring}")

switch (season) {

    case "Winter":
        alert("My favorite season is Winter");
        break;

    case "Sammer":
        alert("My favorite season is Sammer");
        break;

    case "Autumn":
        alert("My favorite season is Autumn");
        break;

    case "Spring":
        alert("My favorite season is Winter");
        break;

    default:
        alert("I love all seasons");
        break;
}