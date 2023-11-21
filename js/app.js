// Instantiate Variables
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const passwordLength = document.getElementById('passwordLength');
const newPassword = document.getElementById('newPassword');

// Instantiate Arrays for Password Characters
const uppercaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbersArray = '0123456789'.split('');
const symbolsArray = '!@#$%^&*()_+~`|}{[]\:;?><,./-='.split('');

// Generate Random Password using the above arrays
function generateRandomPassword() {
    let passwordCharacters = [];
    if (uppercase.checked) {
        passwordCharacters = passwordCharacters.concat(uppercaseArray);
    }
    if (lowercase.checked) {
        passwordCharacters = passwordCharacters.concat(lowercaseArray);
    }
    if (numbers.checked) {
        passwordCharacters = passwordCharacters.concat(numbersArray);
    }
    if (symbols.checked) {
        passwordCharacters = passwordCharacters.concat(symbolsArray);
    }

    let usedCharacters = new Set();
    let password = '';

    // Adjusted loop to ensure characters don't repeat
    while (password.length < passwordLength.value) {
        let randomChar = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

        if (!usedCharacters.has(randomChar)) {
            usedCharacters.add(randomChar);
            password += randomChar;
        }

        // If all possible characters are used and the password is still not long enough,
        // break the loop to avoid an infinite loop.
        if (usedCharacters.size === passwordCharacters.length) {
            break;
        }
    }

    newPassword.value = password;
    console.log(password);
}

// Range Slider
document.getElementById('passwordLength').addEventListener('input', function (e) {
    document.getElementById('rangeValue').innerText = e.target.value;
});


// Generate Password Button
document.getElementById("generatePassword").addEventListener("click", function (event) {
    event.preventDefault();
    generateRandomPassword();
});

// Copy Password to Clipboard
document.getElementById("copyPassword").addEventListener("click", function (event) {
    event.preventDefault();
    newPassword.select();
    document.execCommand("copy");
});