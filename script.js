// Assignment code here


// Get references to the #generate element
// declare your variables at the top
var generateBtn = document.querySelector("#generate");
var length;
var uppers;
var lowers;
var numbers;
var specials;



function passwordLength() {
  // we dont make it var length so that this variable can exist anywhere; otherwise, the variable would only exist in this area
  length = prompt("Your password must be number between 8 and 128")
  // prompt user to select a number between 8 - 128. If they do not choose a number in that range, then call the funtion again and start them from the beginning. Make sure to store answer or number legnth in variable. Return legnth.
  if ("THIS IS WHERE THE <= >= LOGIC GOES password length is less tan 8 or more than 128") {
    alert("Your password must be between 8 and 128")
    //execute this function
  }
  return length;
}

function passwordOptions() {
  // promt user with series of confirms asking if they want specific characters. If they do not choose any, then call the fucntion again. Make sure to store the number length in variables. 
  lowers = confirm("Do you want lowercase letters in your password?");
  uppers = confirm("Do you want upper case letters in your password?");
  numbers = confirm("");
  specials = confirm ("");

  if ("everything equals to false, then pop up an alert") {
    alert("")
    passwordOptions()
  }



  return options = {
  //if the key and value lowers key and value true for lowers above, then you can just name the key and add a comma ex: lowers, instead of lowers:lowers;
    lowers,
    uppers,
    numbers,
    specials,
    }

}

function generatePassword() {
  var length = passwordLength();
  var options = passwordOptions();

  var lowercaseLettersArray = [];
  var upppercaseLettersArray = [];
  var passwordGenArray = [];


// .concat

var passwordGenArray = [];

if (options.lowers) {
  passwordGenArray = passwordGenArray.concat(lowercaseLettersArray)
}

var password = "";

for (var i=0; i < length; i++) {
  //choose random letter of that passwordGenArray & store it into the password. Use Math.Random & Math.Floor below
  password = password + passwordGenArray[Math.random...]
}


if (options.uppers) {
  passwordGenArray = passwordGenArray.concat(upppercaseLettersArray)
}
  //more logic here to determine what to include

  //more logic here to loop through this to determine random letters or characters depeding on length
  
  //return randomly generataed password
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

console.log (options.uppers)

//to make the password string togther

for (var i=0; i < 10; i++) {
  password = password + i.toString();
  console.log(password);
}



