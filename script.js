function validateInput() {
    const input = document.getElementById('email-mobile');
    const errorMsg = document.getElementById('error-msg');
    const nextBtn = document.getElementById('next-btn');
    const value = input.value.trim();

    if (!value) {
        errorMsg.textContent = 'Please enter your email or mobile number.';
        nextBtn.disabled = true;
        return;
    }

    if (isNaN(value.charAt(0))) {
        // Assume it's an email
        if (validateEmail(value)) {
            errorMsg.textContent = '';
            nextBtn.disabled = false;
        } else {
            errorMsg.textContent = 'Please enter a valid email.';
            nextBtn.disabled = true;
        }
    } else {
        // Assume it's a mobile number
        if (validateMobile(value)) {
            errorMsg.textContent = '';
            nextBtn.disabled = false;
        } else {
            errorMsg.textContent = 'Please enter a valid 10-digit mobile number.';
            nextBtn.disabled = true;
        }
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateMobile(mobile) {
    const re = /^[0-9]{10}$/;
    return re.test(String(mobile));
}

function handleNext() {
    const input = document.getElementById('email-mobile');
    alert('All good: ' + input.value);
    input.value = '';
    document.getElementById('next-btn').disabled = true;
}

function handleGoogleSignIn() {
    alert('Google Sign-In button clicked.');
    // Integrate Google Sign-In SDK here
}
