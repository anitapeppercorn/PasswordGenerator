// Assignment code here

// assign names to arrays for the character codes
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// function to generate password, no arguments to pass
function generatePassword() {
// first prompt to ask user to enter length between 8 and 128
  characterAmount = parseInt(
    prompt(
      "Welcome. You will now be asked a series of prompts. Please enter the length between 8 and 128 characters"
    )
  );

  // conditional for Not a Number, <8 and >128 characters
  if (isNaN(characterAmount) || characterAmount < 8 || characterAmount > 128) {
    characterAmount = parseInt;
    prompt("Oops! Please enter a password between 8 and 128 characters");
  } else {
    includeLowercase = confirm("Would you like lower case in your password?");
    includeUppercase = confirm("Would you like upper case in your password?");
    includeNumbers = confirm("Would you like numbers in your password?");
    includeSymbols = confirm("Would you like special case in your password?");
  }

// randrom number generator
// defining the function to generate password
// by default lowercase characters are included here. if other character types 
// are included their character codes are concatenated to the total array
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase === true ) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols === true) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers=== true) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
// we define the const passwordCharacters as an array
  const passwordCharacters = []
// we start a loop that increments for the number of password characters
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
// Push method adds new items to the end of the array and returns the new length
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

//Definiong a function that creates an array with the character codes
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
