// variables created
var enter;
var confirmCharacter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var choices;

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

  // alert if they choose a number less than 8 or greater than 128.  
    enter = parseInt(prompt("You must choose between 8 and 128"));

}

// next questions if the proper value is inputted. Use confirm to ask the series of questions. 

else {
    // Continues once user input is validated
    confirmNumber = confirm("Will this contain numbers?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters");
};
// another control flow for the scenarios they select
    // if they select "no" for all the questions
if (!confirmCharacter && !confirmLowercase && !confirmNumber && !confirmUppercase) {
    choices = alert("You need to select at least one criteria");
    
}
    // option 1 (yes to all option)
    else if (confirmCharacter && confirmLowercase && confirmNumber && confirmUppercase) {
        choice = character.concat(number, alphabet, alphabet2);
    }
    // option 2 (yes to only three options)
    else if (confirmCharacter && confirmLowercase && confirmNumber) {
        choice = character.concat(alphabet, number);
    }
    
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choice = character.concat(alphabet, alphabet2);
    }

    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choice = character.concat(number, alphabet2);
    }

    else if (confirmLowercase && confirmNumber && confirmUppercase) {
        choice = alphabet.concat(number, alphabet2);
    }
    // option 3 (yes to two options)
    else if (confirmCharacter && confirmNumber) {
        choice = character.concat(number);
    }

    else if (confirmCharacter && confirmLowercase) {
        choice = character.concat(alphabet);
    }

    else if (confirmCharacter && confirmUppercase) {
        choice = character.concat(alphabet2);
    }

    else if (confirmNumber && confirmLowercase) {
        choice = number.concat(alphabet);
    }

    else if (confirmNumber && confirmUppercase) {
        choice = number.concat(alphabet2);
    }

    else if (confirmLowercase && confirmUppercase) {
        choice = alphabet.concat(alphabet2);
    }
    // option 4 (yes to one option)
    else if (confirmCharacter) {
        choice = character;
    }

    else if (confirmNumber) {
        choice = number;
    }

    else if (confirmLowercase) {
        choice = alphabet;
    }

    else if (confirmUppercase) {
        choices = space.concat(alphabet2);
    };
// random selection of the following arrays. 
var password = [];

for (var i = 0; i < enter; i++) {
    var choicePicked = choice[Math.floor(Math.random () * choice.length)];
    push(choicePicked);
}

// turn result into string
var ps = password.join("");
UserInput(ps);
return ps;
}
// put result into the textbox

