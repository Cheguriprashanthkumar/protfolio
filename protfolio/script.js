// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const captchaInput = document.getElementById('captchaInput').value;
    const captchaValue = document.getElementById('captchaValue').innerText;
    const errorMessage = document.getElementById('error-message');

    if (username === 'prashanth' && password === '123456' && captchaInput === captchaValue) {
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Invalid username, password, or CAPTCHA.';
        errorMessage.style.visibility = 'visible';
    }
});

function generateCaptcha() {
    const captcha = Math.floor(Math.random() * 9000) + 1000; // Generates a 4-digit number
    document.getElementById('captchaValue').innerText = captcha;
}

// Generate CAPTCHA when the page loads
window.onload = function() {
    generateCaptcha();
};
