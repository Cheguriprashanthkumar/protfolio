document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById('dynamic-text');

    const texts = [
        { content: 'Prashanth Kumar', colorClass: 'highlight' },
        { content: 'Software Developer', colorClass: 'highlight software-developer' }
    ];

    let index = 0;

    setInterval(() => {
        // Toggle between the texts
        index = (index + 1) % texts.length;

        // Update the text and class
        dynamicText.textContent = texts[index].content;
        dynamicText.className = texts[index].colorClass;
    }, 2000); // Change text every 3 seconds
});
// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'prashanth' && password === '123456') {
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.visibility = 'visible';
    }
});
