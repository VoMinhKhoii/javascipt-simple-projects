const password = document.getElementById('password');
const message = document.getElementById('message');
const strength = document.getElementById('strength');
const display = document.querySelector('.fas.fa-eye');

password.addEventListener('input', function(){
    const passwordValue = password.value;
    let strengthValue = '';
    
    // Remove all classes first
    strength.classList.remove('weak', 'moderate', 'strong');

    if(passwordValue.length === 0){
        strengthValue = '';
    } else if(passwordValue.length < 6) {
        strengthValue = 'Weak';
        strength.classList.add('weak');
    } else if(passwordValue.length < 10) {
        strengthValue = 'Moderate';
        strength.classList.add('moderate');
    } else {
        strengthValue = 'Strong';
        strength.classList.add('strong');
    }

    strength.textContent = strengthValue;
    message.style.display = passwordValue.length === 0 ? 'none' : 'block';
});

display.addEventListener('click', function(){
    const passwordType = password.getAttribute('type');

    if(passwordType === 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
});