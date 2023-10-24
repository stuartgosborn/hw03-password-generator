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
  var pwLength = Number(
    prompt("Enter your password length; must be from 8 to 128 characters:", "")
  );
  var includeLowercase = confirm(
    "Would you like to include Lowercase characters?"
  );
  var includeUppercase = confirm(
    "Would you like to include Uppercase characters?"
  );
  var includeNumbers = confirm("Would you like to include Numeric characters?");
  var includeSpecial = confirm("Would you like to include Special characters?");

  if (includeLowercase) {
    lowercase = "abcdefghijklmnopqrstuvwxyz";
  } else {
    lowercase = "";
  };

  if (includeUppercase) {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    uppercase = "";
  };
  if (includeNumbers) {
    numbers = "0123456789";
  } else {
    numbers = "";
  };
  if (includeSpecial) {
    special = "!@#$&*";
  } else {
    special = "";
  };

  let securePw = "";
  let allowedSymbols = `${lowercase}${uppercase}${numbers}${special}`;

  console.log(pwLength);
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
  return securePw;
}
