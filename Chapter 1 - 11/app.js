//Chapter No. 1

//Task 1 (Solution)
//  alert ("Dear User, Welcome to My Website !! ");

//Task 2 (Solution)
//  alert ("Error! Please enter a valid password");

//Task 3 (Solution)
//  alert ("Welcome to JS Land... \nHappy Coding!");

//Task 4 (Solution)
/*
    alert ("Welcome to JS Land...");
    alert ("Happy Coding!");
*/

//Task 5 (Solution)
/*
1) Right Click with Mouse.
2) Click on "Inspect Element"
3) Go to the tab "Console"
4) Write the following code:-
*/
//  alert ("Hello... I can run JS through my web browser's console");

//Task 6 (Solution)
/*
<!DOCTYPE html>
<html>
    <head>
        <title> JS Script </title>
        <script src="app.js"> </script>
    </head>
    <body>

    </body>
</html>
*/

//Task 7 (Solution)
/*
<!DOCTYPE html>
<html>
    <head>
        <title> JS Script </title>
        <script src="app.js"> </script>      [a]
    </head>

    <script src="app.js"> </script>          [b]
    <body>

        <script src="app.js"> </script>      [c]

    </body>
    <script src="app.js"> </script>          [d]

</html>
*/

//...................................................................//

//Chapter No. 2

//Task 1 (Solution)
//  var username;

//Task 2 (Solution)
//  var myName = "Muhammad Ammad Hassan";

//Task 3 (Solution)
/*
var message;
message = "Hello World";
alert(message);
*/

//Task 4 (Solution)
/*
var studentName, studentAge, studentCourse;
studentName = "Jhone Doe";
studentAge = "15";
studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge + " years old");
alert(studentCourse);
*/

//Task 5 (Solution)
//  alert("PIZZA \nPIZZ \nPIZ \nPI \nP");
//OR
/*
var a,b,c,d,e;
a="PIZZA"; b="PIZZ"; c="PIZ"; d="PI"; e="P";
alert(a + "\n"+b+ "\n"+c+ "\n"+d+ "\n"+e);
*/

//Task 6 (Solution)
/*
var email = "emo.rajput@yahoo.com";
alert("My email address is " + email);
*/

//Task 7 (Solution)
/*
var book;
book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);
*/

//Task 8 (Solution)
//  document.write("Yah! I can write HTML content through JavaScript");

//Task 9 (Solution)
/*
var newStyle;
newStyle = “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”;
alert(newStyle);
*/

//...................................................................//

//Chapter No. 3

//Task 1 (Solution)
/*
var age = 23;
alert("I am " + age + " years old");
*/

//Task 2 (Solution)
/*
var websiteVisit = 12;
alert("You have visited this site " + websiteVisit + " times");
*/

//Task 3 (Solution)
/*
var birthYear;
birthYear = 1997;
document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number");
*/

//Task 4 (Solution)
/*
var visitorName, productTitle, productQuantity;

visitorName = prompt("Dear User, enter your name");
productTitle = prompt(visitorName + " , write the name of product");
productQuantity = +prompt(visitorName + " , How many " + productTitle + "(s) you want to order?");

document.write("<br><br><h3>Question 4</h3>" + visitorName + " ordered " + productQuantity + " " + productTitle + "(s) on XYZ Clothing store.");
*/

//...................................................................//

//Chapter No. 4

//Task 1 (Solution)
//  var subjectName, subjectCode, subjectTeacher;

//Task 2 (Solution)
/*5 Legal Variables
    var userFirstName;
    var userLastName;
    var user_city;
    var password;
    var email;

5 Illegal Variables
    var user name;
    var 1;
    var student-percent;
    var @user;
    var catch;
    var xyz;        it is illegal because it is not descriptive. */

//Task 3 (Solution)
/*
document.write
("<h1>Rules for Naming JS Variables</h1>" + 
"Variable names can only contain letters, numbers, dollar ($) and underscore (_). For example <b>$my_1stVariable</b>" + 
"</br> Variables must begin with a letter, dollar ($) or underscore (_). For example <b>$name, _name</b> or <b>name</b>" +  
"</br> Variable names are case sensitive" + 
"</br> Variable names should not be JS Keywords");
*/

//...................................................................//

//Chapter No. 5

//Task 1 (Solution)
/*
var firstNumber, secondNumber, result;
firstNumber = +prompt("Enter first number");
secondNumber = +prompt("Enter second number");
result = firstNumber + secondNumber;
document.write("Sum of " + firstNumber + " and " + secondNumber + " is " + result + "</br>");
*/

//Task 2 (Solution)
/*
var firstNumber, secondNumber, result;
firstNumber = +prompt("Enter first number");
secondNumber = +prompt("Enter second number");

result = firstNumber - secondNumber;
document.write("Subtraction of " + firstNumber + " and " + secondNumber + " is " + result + "</br>");

result = firstNumber * secondNumber;
document.write("Multiplication of " + firstNumber + " and " + secondNumber + " is " + result + "</br>");

result = firstNumber / secondNumber;
document.write("Division of " + firstNumber + " and " + secondNumber + " is " + result + "</br>");

result = firstNumber % secondNumber;
document.write("Modulus of " + firstNumber + " and " + secondNumber + " is " + result + "</br>");
*/

//Task 3 (Solution)
/*
var newValue;
document.write("Value after variable declaration is: " + newValue + "</br>");
newValue = 5;
document.write("Initial value: " + newValue + "</br>");
newValue = ++newValue;
document.write("Value after increment is: " + newValue + "</br>");
newValue = newValue + 7;
document.write("Value after addition is: " + newValue + "</br>")
newValue = --newValue;
document.write("Value after decrement is: " + newValue + "</br>");
newValue = newValue % 3;
document.write("The remainder is: " + newValue + "</br>");
*/

//Task 4 (Solution)
/*
var ticketPrice = 600;
var ticketQuantity;
ticketQuantity = +prompt("Ticket Price = " + ticketPrice +"\nHow many movie tickets you want to buy?");
var totalCost;
totalCost = ticketPrice * ticketQuantity;
document.write("Total cost to buy " + ticketQuantity + " tickets of a movie is <b>" + totalCost + " PKR </b> </br>");
*/

//Task 5 (Solution)
/*
var tableValue;
tableValue = +prompt("Which math table you want to print ?");
document.write("Table of " + tableValue + "</br>");
document.write(tableValue + "x" + "1" + "=" + tableValue*1 + "</br>");
document.write(tableValue + "x" + "2" + "=" + tableValue*2 + "</br>");
document.write(tableValue + "x" + "3" + "=" + tableValue*3 + "</br>");
document.write(tableValue + "x" + "4" + "=" + tableValue*4 + "</br>");
document.write(tableValue + "x" + "5" + "=" + tableValue*5 + "</br>");
document.write(tableValue + "x" + "6" + "=" + tableValue*6 + "</br>");
document.write(tableValue + "x" + "7" + "=" + tableValue*7 + "</br>");
document.write(tableValue + "x" + "8" + "=" + tableValue*8 + "</br>");
document.write(tableValue + "x" + "9" + "=" + tableValue*9 + "</br>");
document.write(tableValue + "x" + "10" + "=" + tableValue*10 + "</br>");
*/

//Task 6 (Solution)
/*
var tempValueC, tempValueF, conversion;
tempValueC = +prompt("Enter value in Celsius \xB0C");
conversion = (tempValueC * (9/5)) + 32;
document.write(tempValueC + "\xB0C is " + conversion + "\xB0F </br>");
tempValueF = +prompt("Enter value in Fahrenheit \xB0F");
conversion = (tempValueF - 32) * (5/9);
document.write(tempValueF + "\xB0F is " + conversion + "\xB0C </br>");
*/

//Task 7 (Solution)
/*
var priceItem1, priceItem2, quantityItem1, quantityItem2, deliveryCharges, totalPrice;
priceItem1 = 650;
quantityItem1 = 3;
priceItem2 = 100;
quantityItem2 = 7;
deliveryCharges = 100;
document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "</br>");
document.write("Quantity of item 1 is " + quantityItem1 + "</br>");
document.write("Price of item 2 is " + priceItem2 + "</br>");
document.write("Quantity of item 2 is " + quantityItem2 + "</br>");
document.write("Shipping Charges " + deliveryCharges + "</br>");

totalPrice = (priceItem1*quantityItem1) + (priceItem2*quantityItem2) + deliveryCharges;
document.write("</br> Total cost of your order is " + totalPrice + "</br>");
*/

//Task 8 (Solution)
/*
document.write("<h2>Marks Sheet</h2>");
var totalMarks, obtainMarks, studentPercent;
totalMarks = 980;
obtainMarks = +prompt("Dear Student, enter your obtained marks out of " + totalMarks);
studentPercent = (obtainMarks/totalMarks)*100;
document.write("Total Marks: " + totalMarks + "</br>");
document.write("Marks Obtained: " + obtainMarks + "</br>");
document.write("Percentage: " + studentPercent + "% </br>");
*/

//Task 9 (Solution)
/*
document.write("<h2>Currency in PKR</h2>");
var quantityOfUSD, quantityOfRiyal, valueOfUSDinPKR, valueOfRiyalinPKR, totalCurrency;
valueOfUSDinPKR = 104.80;
valueOfRiyalinPKR = 28;
quantityOfUSD = +prompt("1 Dollar = " + valueOfUSDinPKR + "\nHow many Dollar(s) you want to exchange ?");
quantityOfRiyal = +prompt("1 Riyal = " + valueOfRiyalinPKR + "\nHow many Riyal(s) you want to exchange ?");
totalCurrency = (quantityOfUSD*valueOfUSDinPKR) + (quantityOfRiyal*valueOfRiyalinPKR);
document.write("Total Currency in PKR: " + totalCurrency + "</br>");
*/

//Task 10 (Solution)
/*
var valueOriginal = 5;
var valueCalculated = ((valueOriginal + 5) * 10) / 2;

document.write("The Original Value: " + valueOriginal + "</br>");
document.write("Mathematical Expression: ((" + valueOriginal + "+5)\xD710)\xF7 </br>");
document.write("The Calculated Value: " + valueCalculated + "</br>");
*/

//Task 11 (Solution)
/*
document.write("<h2>Age Calculator</h2>");

var currentYear, birthYear, age1, age2;
currentYear = 2020;
var birthYear = +prompt("Enter your Birth Year");
age1 = currentYear - birthYear;
age2 = age1 - 1;
document.write("You are either " + age1 + " or " + age2 + " years old </br>");
*/

//Task 12 (Solution)
/*
document.write("<h2>The Geometrizer</h2>");
var circleRadius, circleArea, circleCircumference;
const pi = 3.142;
circleRadius = +prompt("Enter the radius of the Circle");
circleCircumference = 2 * pi * circleRadius;
circleArea = pi * (circleRadius * circleRadius);
document.write("Radius of a circle: " + circleRadius + "</br>");
document.write("The circumference is: " + circleCircumference + "</br>");
document.write("The area is: " + circleArea + "</br>");
*/

//Task 13 (Solution)
/*
document.write("<h2>The Lifetime Supply Calculator</h2>");
var favrtSnack, currentAge, estimatedAge, snackAmount, supplyCalculation;

favrtSnack = prompt("What is your Favourite Snack?");
currentAge = +prompt("What is your Current Age?");
estimatedAge = +prompt("Guess, What will be your Maximum Age?");
snackAmount = +prompt("How many " + favrtSnack + " you eat Daily?");

supplyCalculation = ((snackAmount * 365) * (estimatedAge - currentAge));

document.write("Favourite Snack: " + favrtSnack + "</br>");
document.write("Current Age: " + currentAge + "</br>");
document.write("Estimated Maximum Age: " + estimatedAge + "</br>");
document.write("Amount of snacks per day: " + snackAmount + "</br>");
document.write("You will need " + supplyCalculation + " " + favrtSnack + 
" to last you until the ripe old age of " + estimatedAge + "</br>");
*/

//...................................................................//

//Chapter No. 6 - 9

//Task 1 (Solution)
/*
var userValue;
userValue = +prompt("Please enter any number");

document.write("Result </br> The value of a is: " + userValue + "</br> ................................" + "</br> </br>");

userValue = ++userValue;
document.write("The value of ++a is: "+ userValue + "</br>");
document.write("Now the value of a is: "+ userValue + "</br> </br> </br>");

userValue = userValue++;
document.write("The value of a++ is: "+ userValue + "</br>");
userValue = userValue + 1;
document.write("Now the value of a is: "+ userValue + "</br> </br> </br>");

userValue = --userValue;
document.write("The value of --a is: "+ userValue + "</br>");
document.write("Now the value of a is: "+ userValue + "</br> </br> </br>");

userValue = userValue--;
document.write("The value of a-- is: "+ userValue + "</br>");
userValue = userValue -1;
document.write("Now the value of a is: "+ userValue + "</br>");
*/

//Task 2 (Solution)
/*
var a=2, b=1;
var result = --a - --b;
document.write("a is " + a + "</br>");
document.write("b is " + b + "</br>");
document.write("result is " + result + "</br>");

--a     It will first minus 1 from value of a, hence a=1
--a - --b    It will also minus 1 from value of a and b, hence a=1 and b=0, therefore 1 - 0 = 1
--a - --b + ++b     It will first add 1 into value of b, hence b=1, therefore 1 - 0 + 1 = 2
--a - --b + ++b + b--   It will do -1 but after the calcultion, therefore 1 - 0 + 1 + 1 = 3

--a     =>  (-1 + 2) = 1
--a - --b   =>  (-1 + 2) - (-1 + 1) = 1
--a - --b + ++b     =>  (-1 + 2) - (-1 + 1) + (+1 + 0) = 2
--a - --b + ++b + b--   =>  {(-1 + 2) - (-1 + 1) + (+1 + 0) + (1) - 1} = {3 - 1}
*/

//Task 3 (Solution)
/*
var userName;
userName = prompt("Dear User, what is your name?");
document.write("Dear <b>" + userName + "</b> Welcome To Our Website !!");
*/

//Task 4 (Solution)
//Question is not mentioned

//Task 5 (Solution)
/*
var tableValue;
tableValue = +prompt("Which math table you want to print ?");

if(tableValue==0)
{
    tableValue=5;

    document.write("Table of " + tableValue + "</br>");
    document.write(tableValue + "x" + "1" + "=" + tableValue*1 + "</br>");
    document.write(tableValue + "x" + "2" + "=" + tableValue*2 + "</br>");
    document.write(tableValue + "x" + "3" + "=" + tableValue*3 + "</br>");
    document.write(tableValue + "x" + "4" + "=" + tableValue*4 + "</br>");
    document.write(tableValue + "x" + "5" + "=" + tableValue*5 + "</br>");
    document.write(tableValue + "x" + "6" + "=" + tableValue*6 + "</br>");
    document.write(tableValue + "x" + "7" + "=" + tableValue*7 + "</br>");
    document.write(tableValue + "x" + "8" + "=" + tableValue*8 + "</br>");
    document.write(tableValue + "x" + "9" + "=" + tableValue*9 + "</br>");
    document.write(tableValue + "x" + "10" + "=" + tableValue*10 + "</br>");
}
else
{
    document.write("Table of " + tableValue + "</br>");
    document.write(tableValue + "x" + "1" + "=" + tableValue*1 + "</br>");
    document.write(tableValue + "x" + "2" + "=" + tableValue*2 + "</br>");
    document.write(tableValue + "x" + "3" + "=" + tableValue*3 + "</br>");
    document.write(tableValue + "x" + "4" + "=" + tableValue*4 + "</br>");
    document.write(tableValue + "x" + "5" + "=" + tableValue*5 + "</br>");
    document.write(tableValue + "x" + "6" + "=" + tableValue*6 + "</br>");
    document.write(tableValue + "x" + "7" + "=" + tableValue*7 + "</br>");
    document.write(tableValue + "x" + "8" + "=" + tableValue*8 + "</br>");
    document.write(tableValue + "x" + "9" + "=" + tableValue*9 + "</br>");
    document.write(tableValue + "x" + "10" + "=" + tableValue*10 + "</br>");
};
*/

//Task 6 (Solution)
/*
var firstSubject, secondSubject, thirdSubject, totalMarks, firstSubMarks, secondSubMarks, thirdSubMarks, percent , grandTotal, grandObtain;

totalMarks = 100;
grandTotal = 100*3;

firstSubject = prompt("Dear User, enter the name of your First Subject");
secondSubject = prompt("Dear User, enter the name of your Second Subject");
thirdSubject = prompt("Dear User, enter the name of your Third Subject");

firstSubMarks = +prompt("Enter your " + firstSubject + " Marks");
secondSubMarks = +prompt("Enter your " + secondSubject + " Marks");
thirdSubMarks = +prompt("Enter your " + thirdSubject + " Marks");

grandObtain = firstSubMarks + secondSubMarks + thirdSubMarks;

document.write("<table border=3px;>" + 
"<tr>" +
    "<th>" + "Subject" + "</th>" +
    "<th>" + "Total Marks" + "</th>" +
    "<th>" + "Obtained Marks" + "</th>" +
    "<th>" + "Percentage" + "</th>" +
"</tr>" +
"<tr>" +
    "<td>" + firstSubject + "</td>" +
    "<td>" + totalMarks + "</td>" +
    "<td>" + firstSubMarks + "</td>" +
    "<td>" + (firstSubMarks/totalMarks)*100 + "%" + "</td>" +
"</tr>" +
"<tr>" +
    "<td>" + secondSubject + "</td>" +
    "<td>" + totalMarks + "</td>" +
    "<td>" + secondSubMarks + "</td>" +
    "<td>" + (secondSubMarks/totalMarks)*100 + "%" + "</td>" +
"</tr>" +
"<tr>" +
    "<td>" + thirdSubject + "</td>" +
    "<td>" + totalMarks + "</td>" +
    "<td>" + thirdSubMarks + "</td>" +
    "<td>" + (thirdSubMarks/totalMarks)*100 + "%" + "</td>" +
"</tr>" +
"<tr>" +
    "<td>" + "</td>" +
    '<td style="text-align:right;"><strong>' + grandTotal + "</strong></td>" +
    '<td style="text-align:right;"><strong>' + grandObtain + "</strong></td>" +
    '<td style="text-align:right;"><strong>' + (grandObtain/grandTotal)*100 + "%" + "</strong></td>" +
"</tr>" +
"</table>");
*/

//Task 7 (Solution)
//Question is not mentioned

//...................................................................//

//Chapter No. 9 - 11

//Task 1 (Solution)

//Task 2 (Solution)
/*
var firstNum, secondNum;
firstNum = +prompt("Enter the first number");
secondNum = +prompt("Enter the second number");

if(firstNum>secondNum)
{
    document.write("The First Number <b>" + firstNum + "</b> is Larger than the Second Number <b>" + secondNum + "</b>");
}
else if(firstNum<secondNum)
{
    document.write("The Second Number <b>" + secondNum + "</b> is Larger than the First Number <b>" + firstNum + "</b>");
}
else
{
    document.write("The First Number <b>" + firstNum + "</b> and the Second Number <b>" + secondNum + "</b> are Equal");
}
*/

//Task 3 (Solution)
/*
var number;
number = +prompt("Dear User, enter any number");

if(number>0)
{
    document.write("The Number <b>" + number + "</b> is Positive");
}
else if(number<0)
{
    document.write("The Number <b>" + number + "</b> is Negative");
}
else
{
    document.write("The Number <b>" + number + "</b> is Zero");
}
*/

//Task 4 (Solution)
/*
var char, charLength;
char = prompt("Enter any single Alphabet Character");
charLength = char.length;

if(char==="a"||"A"||"e"||"E"||"i"||"I"||"o"||"O"||"u"||"U")
{
    return true;
}
else if(charLength==1 && char!=="a"||"A"||"e"||"E"||"i"||"I"||"o"||"O"||"u"||"U")
{
    return false;
}
else
{
    alert("SORRY, you have not entered the single Alphabet Character. Try Again !!");
};
*/

//Task 5 (Solution)
/*
var password, verifyPassword, passwordLength;
password = prompt("Dear User, please enter the password \nThe length of Password must be 8 characters");
passwordLength = password.length;
if(passwordLength==8)
{
    verifyPassword = prompt("Dear User, please verify the password");
    if(password===verifyPassword)
    {
        alert("Correct! The password you entered matches the original password");
    }
    else
    {
        alert("Incorrect Password");
    }
}
else if(passwordLength==0)
{
    alert("Please enter your Password");
}
else
{
    alert("Your password is less than 8 characters. Try Again");
}
*/

//Task 6 (Solution)
/*
var greeting;
var hour=13;
if(hour<18)
{
    greeting="Good Day";
}
else
{
    greeting="Good Evening";
}
*/

//Task 7 (Solution)
/*
var time, timeLength ;
time = prompt("Dear User, enter the time \nThe time format is 1900=7pm");
timeLength = time.length;

if(timeLength==4)
{
    var convert = parseInt(time, 10);
    if(time>=0000 && time<1200)
    {
        alert("Good Morning");
    }
    else if(time>=1200 && time<1700)
    {
        alert("Good Afternoon");
    }
    else if(time>=1700 && time<2100)
    {
        alert("Good Evening");
    }
    else if
    (time>=2100 && time<2359)
    {
        alert("Good Night");
    }
    else
    {
        alert("Incorrect Time");
    }
}
else
{
    alert("Incorrect Time");
};
*/