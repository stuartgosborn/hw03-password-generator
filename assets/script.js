// Assignment Code
// Creates the variable to reference the botton labeled "generate password"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Creates the function to display the generated password on the screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
// Will connect the event listener, 'onClick' to the write password function.
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pwLength = prompt(
    "Enter your desired password length; must be from 8 to 128 characters:",
    ""
  );
  if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    alert("Please enter a number from 8 to 128.");
  } else if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecial
  ) {
    alert(
      "Please add at least one character type."
    );
    var includeLowercase = confirm(
      "Would you like to include Lowercase characters?"
    );
    var includeUppercase = confirm(
      "Would you like to include Uppercase characters?"
    );
    var includeNumbers = confirm(
      "Would you like to include Numeric characters?"
    );
    var includeSpecial = confirm(
      "Would you like to include Special characters?"
    );
  }

  if (includeLowercase) {
    lowercase = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowercase = "";
  }

  if (includeUppercase) {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    uppercase = "";
  }
  if (includeNumbers) {
    numbers = "0123456789";
  } else {
    numbers = "";
  }
  if (includeSpecial) {
    special = "!@#$&*";
  } else {
    special = "";
  }

  let securePw = "";
  let allowedSymbols = `${lowercase}${uppercase}${numbers}${special}`;

  console.log(pwLength);
  console.log(typeof pwLength);
  console.log(includeLowercase);
  console.log(includeUppercase);
  console.log(includeNumbers);
  console.log(includeSpecial);
  console.log(allowedSymbols);

  for (let i = 1; i <= pwLength; i++) {
    symbol = Math.floor(Math.random() * allowedSymbols.length + 1);
    securePw += allowedSymbols.charAt(symbol);
  }
  console.log(securePw);
  if (securePw != "") {
    alert(
      `Your password is ${securePw}; please store it for safe keeping. After closing this box, it will be displayed once more below.`
    );
  } else {
    alert(`Your password could not be generated. Please try again. Passwords must be 8 - 128 characters in length and contain at least one character type.`);
  }
  return securePw;
}
