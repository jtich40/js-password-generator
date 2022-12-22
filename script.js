// 1. Prompt a user for the password criteria
//    a. Password length between 8 and 128
//    b. lowercase, uppercase, numeric, special characters (use arrays)
// 2. Validate the input from user
// 3. Generate password
// 4. Display password generated on the page

// Function that will be called at the end to generate random password based on user input
function generatePassword() {
  
  // Arrays of character types to be included in password criteria
  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const special = ["!", "?", "#", "$", "%", "&", "/", "(", ")", "*", "+", ":", "-", ";", "@", "_"];
  
  
  // Empty array to be filled with character type options after prompt selections
  let passOptions = [];
  
  // Prompts to determine which password criteria is used
  let passLength = parseInt(prompt("How long would you like your password to be?"));
  
  // If statement that will generate alert and reset prompts if length input is invalid
  if(passLength < 8 || passLength > 128) { 
  alert("Please enter a number between 8-128.");
  return null;
}

  let passNumber = confirm("Would you like to include numbers in your password?");
  let passSpecial = confirm("Would you like to include special characters in your password?");
  let passUppercase = confirm("Would you like to include uppercase letters in your password?");
  let passLowercase = confirm("Would you like to include lowercase letters in your password?");

// Conditional to validate user input made at each prompt
  if (passNumber) {
    passOptions.push(...number);
  }
  if (passSpecial) {
    passOptions.push(...special);
  }
  if (passUppercase) {
    passOptions.push(...uppercase);
  }
  if (passLowercase) {
    passOptions.push(...lowercase);
  }
  console.log(passOptions);

  // This for loop randomly generates password characters until password length has been achieved
  let password = "";
  for(let i = 0; i < passLength; i++) {
    password += passOptions[Math.floor(Math.random() * passOptions.length)];
    console.log(password);
  }
  return password;
};
  
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);