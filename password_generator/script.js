const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const passBox = document.getElementById('passBox');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const getBtn = document.getElementById('getBtn');
const copyIcon = document.getElementById('copyIcon');

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`"\'\\';


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', function(){
    sliderValue.textContent = inputSlider.value;
});

getBtn.addEventListener('click', function(){
    passBox.value = generatePassword();
});

function generatePassword() {
    const length = inputSlider.value;
    let characters = '';
    let password = '';

    // Add required characters from each selected category
    if (lowercaseEl.checked) {
        characters += lowercaseLetters;
        password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }
    if (uppercaseEl.checked) {
        characters += uppercaseLetters;
        password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    }
    if (numbersEl.checked) {
        characters += numbers;
        password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (symbolsEl.checked) {
        characters += symbols;
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    if(characters.length === 0) {
        alert('Please select at least one category');
        return '';
    }


    // Then fill the rest randomly
    for (let i = password.length; i < length; i++) {
        console.log(password);
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Shuffle the password to make it more random
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;  
}

copyIcon.addEventListener('click', function(){
    if(passBox.value != '' || passBox.value >= 10){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerHTML = "check";


        setTimeout(() => {
            copyIcon.textContent = "content_copy";
        }, 2000);
    }
});