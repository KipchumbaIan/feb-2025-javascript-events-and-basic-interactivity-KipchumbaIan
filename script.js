// Event Handling
document.getElementById('click-button').addEventListener('click', function() {
    this.textContent = 'Clicked!';
});

document.getElementById('hover-button').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#ff6347';
});

document.getElementById('hover-button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#007bff';
});

document.getElementById('keypress-input').addEventListener('keypress', function(event) {
    document.getElementById('keypress-output').textContent = 'Key pressed: ' + event.key;
});

// Secret action for double-click or long press
let secretButton = document.getElementById('secret-button');
let secretMessage = document.getElementById('secret-message');
let pressTimer;

secretButton.addEventListener('mousedown', function() {
    pressTimer = setTimeout(function() {
        secretMessage.style.display = 'block';
    }, 1000);
});

secretButton.addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
});

secretButton.addEventListener('dblclick', function() {
    secretMessage.style.display = 'block';
});

// Interactive Elements - Gallery
let currentImageIndex = 0;
let images = document.querySelectorAll('.gallery-image');

document.getElementById('next-button').addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
});

document.getElementById('prev-button').addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.display = 'block';
});

// Interactive Elements - Tabs
let tabButtons = document.querySelectorAll('.tab-button');
let tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        let tabId = this.getAttribute('data-tab');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Form Validation
let form = document.getElementById('validation-form');
let emailInput = document.getElementById('email-input');
let passwordInput = document.getElementById('password-input');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Email validation
    if (!emailInput.value) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    if (!passwordInput.value) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}); 