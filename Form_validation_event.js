// Real-time validation for name field
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('name').addEventListener('blur', validateName);

function validateName() {
    const nameField = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    
    if (nameField.value.trim() === "") {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
}

// Real-time validation for email field
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('email').addEventListener('blur', validateEmail);

function validateEmail() {
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    
    if (!emailField.value.match(emailPattern)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}

// Real-time validation for password field
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('password').addEventListener('blur', validatePassword);

function validatePassword() {
    const passwordField = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    
    if (passwordField.value.length < 8) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
}

// Form submit validation
document.getElementById('myForm').addEventListener('submit', function(event) {
    validateName();
    validateEmail();
    validatePassword();
    
    // Prevent form submission if any error is displayed
    if (document.querySelectorAll('.error[style="display: block;"]').length > 0) {
        event.preventDefault();
    }
});
