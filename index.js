var userInput = prompt("Input here.");
alert("Hello " + userInput);

alert("Good Afternoon!");
var userName = prompt("What is your name?");
alert("Hello " + userName);

var userBalance = prompt("What is your current balance?");
var balanceInt = parseInt(userBalance);
alert("I've granted you $50 more!");
alert("Your new balance is: $" + (balanceInt + 50));

var number1 = prompt("Enter one number.");
var number2 = prompt("Enter another number.");
var numInt1 = parseInt(number1);
var numInt2 = parseInt(number2);
alert("Addition is: " + (numInt1 + numInt2));
alert("Subtraction is: " + (numInt1 - numInt2));

var TNtax = 1.0925;
var origPrice = parseInt(prompt("Enter a price."));
alert("Price after tax is: $" + (Math.round((origPrice * TNtax) * 100) / 100));