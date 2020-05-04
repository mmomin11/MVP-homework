// variables created
var enter;
var confirmCharacter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;

// create variable values for the prompts. 
// Create an array for the Special characters
character = ["!", "@", "#", "$", "&", "%", " ^ ", "*", "(", ")", "+", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "'", "[", "\\", "]", " { ", "_", "`", "|", "}", "~"];
// create array for numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// create array for letters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create a variable that change lower case to upper case letters for password
var toUpper = function (x) {
    return x.toUpperCase();
};

var alphabet2 = alphabet.map(toUpper);

// function in generating password
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// create first prompt for user to review about how many characters (8-128)
function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

// make sure they select a number to place in the field. 
if (!enter) {
    alert("This needs a value");
} else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));

}
// alert if they choose a number less than 8 or greater than 128.
// next questions if the proper value is inputted. Use confirm to ask the series of questions. 

// another control flow for the scenarios they select
    // if they select "no" for all the questions
    // option 1 (yes to all option)
    // option 2 (yes to only three options)
    // option 3 (yes to two options)
    // option 4 (yes to one option)

// random selection of the following arrays. 

// turn result into string

// put result into the textbox

