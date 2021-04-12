// connects to generate button
const generateBtn = document.getElementById('generator-btn');

// character arrays
const uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbersChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbolsChar = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '/', '|', '-', '+'];

// starts application
generateBtn.addEventListener('click', function (event) {
  createPassword();
});

function createPassword() {
  // turn returned string into a number
  let passwordLength = parseInt(prompt('How many characters would you like in your password? (password must have between 8 and 128 characters!)'));

  // makes sure returned value is a number
  while (isNaN(passwordLength) === true) {
    alert('You must enter a NUMBER between 8 and 128');
    passwordLength = parseInt(prompt('How many characters would you like in your password? (password must have between 8 and 128 characters!'));
  };

  // creates mandatory password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Please choose a number between 8 and 128 characters!');
    return;
  };

  // confirms wether user chooses to uses each type of character
  const hasUppercase = confirm('Would you like your password to have uppercase letters?');
  const hasLowercase = confirm('Would you like your password to have lowercase letters?');
  const hasNumbers = confirm('Would you like your password to have numbers?');
  const hasSymbols = confirm('Would you like your password to have symbols?');

  // password must contain atleast one of these fields
  if (hasUppercase === false &&
    hasLowercase === false &&
    hasNumbers === false &&
    hasSymbols === false) {
    alert('Password must have atleast one set of characters!');
  };

  // for loop passes through each set of circumstances for each type of character
  var password = '';
  for (i = 0; i < passwordLength; i++) {

    // generates however many characters for each character type, passes through loop
    if (hasUppercase && password.length < passwordLength) {
      var index = Math.floor(Math.random() * uppercaseChar.length);
      password += uppercaseChar[index];
    };

    if (hasLowercase && password.length < passwordLength) {
      var index = Math.floor(Math.random() * lowercaseChar.length);
      password += lowercaseChar[index];
    };

    if (hasNumbers && password.length < passwordLength) {
      var index = Math.floor(Math.random() * numbersChar.length);
      password += numbersChar[index];
    };

    if (hasSymbols && password.length < passwordLength) {
      var index = Math.floor(Math.random() * symbolsChar.length);
      password += symbolsChar[index];
    };
  };

  // connects result to HTML
  let passTextEl = document.getElementById('answer');
  passTextEl.value = password;

};






