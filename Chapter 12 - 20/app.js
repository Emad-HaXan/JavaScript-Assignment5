//Chapter No. 12 - 13

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