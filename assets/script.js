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
generateBtn.addEventListener("click", writePassword());


function generatePassword(){
  console.log("I am connected");
  let securePw = '';
  let allowedSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789!@#$&*';

  for (let i = 0; i <= 12; i ++) {symbol = Math.floor(Math.random() * allowedSymbols.length + 1);
    securePw += allowedSymbols.charAt(symbol)

  }
  return securePw;
}

console.log(generatePassword());