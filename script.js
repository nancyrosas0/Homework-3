// Assignment code here

// Get references to the #generate element
// declare your variables at the top
var generateBtn = document.querySelector("#generate");
var length;
var uppers;
var lowers;
var numbers;
var specials;
var uppercaseLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];

function passwordLength() {
  // we dont make it var length so that this variable can exist anywhere; otherwise, the variable would only exist in this area
  length = prompt("Your password must be a number between 8 and 128");
  //console.log(length);
  // prompt user to select a number between 8 - 128. If they do not choose a number in that range, then call the funtion again and start them from the beginning. Make sure to store answer or number legnth in variable. Return legnth.
  //"THIS IS WHERE THE <= >= LOGIC GOES password length is less tan 8 or more than 128"
  if (length < 8 || length > 128) {
    alert("Your password must be between 8 and 128")
    //execute this function
  passwordLength()  
  }
  return length;
}

function passwordOptions() {
  // promt user with series of confirms asking if they want specific characters. If they do not choose any, then call the fucntion again. Make sure to store the number length in variables. 
  lowers = confirm("Do you want lowercase letters in your password?");
  uppers = confirm("Do you want upper case letters in your password?");
  numbers = confirm("Do you want numbers in your password?");
  specials = confirm ("Do you want special characters in your password?");

  
  //"everything equals to false, then pop up an alert"
  if (lowers === false && uppers === false && numbers === false && specials === false) {
    alert("You must choose at least one")
    passwordOptions()
  }

  return lowers, uppers, numbers, specials
  //if the key and value lowers key and value true for lowers above, then you can just name the key and add a comma ex: lowers, instead of lowers:lowers;

}

function generatePassword() {
  passwordLength();
  passwordOptions();
 
  var passwordGenArray = [];
  var guaranteed = [];

  // .concat
  if (lowers) {
    passwordGenArray = passwordGenArray.concat(lowercaseLettersArray)
    //add a char to guaranteed
  }

  if (uppers) {
    passwordGenArray = passwordGenArray.concat(uppercaseLettersArray)
  }

  if (numbers) {
    passwordGenArray = passwordGenArray.concat(numbersArray)
  }

  if (specials) {
    passwordGenArray = passwordGenArray.concat(specialCharactersArray)
  }

  console.log(passwordGenArray);

  var password = "";

  for (var i=0; i < length; i++) {
    //choose random letter of that passwordGenArray & store it into the password. Use Math.Random & Math.Floor below
    var index = Math.floor(Math.random() * passwordGenArray.length);

    password = password + passwordGenArray[index];
    console.log(password);
  }

  //create logic to guarantee user at least one value from the criteria they selected
  
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//TODO add call functions and event listeners
// here are the event listeners and function calls
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);