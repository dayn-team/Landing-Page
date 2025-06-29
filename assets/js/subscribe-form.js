// Declaring variables for the form, input fields and submit button
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submitButton');
const waitlistForm = document.getElementById('waitlistForm');
const headingMessage = document.getElementById('headingMessage')

// Disabling button when the form is not filled with necessary data
function checkInputs() {
    if (emailInput.value.trim() !== '') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }
}

emailInput.addEventListener('input', checkInputs);

// Creating custom validation messages for input fields
emailInput.addEventListener('invalid', function(event) {
    event.target.setCustomValidity('Valid email address needed. Jazakumullahu khaeran');
});
emailInput.addEventListener('input', function(event) {
    event.target.setCustomValidity('');
});

// Handling data validation, submission and response.
waitlistForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    emailInput.value.trim();

    if (!emailInput) {
        alert("Please fill in all required fields.");
        return;
    }

    const response = await fetch('https://dayn-apis-ckfde8a4fxbcbwet.uksouth-01.azurewebsites.net/v1/join-waitlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailInput })
    });

    if (response.ok) {
        headingMessage.innerHTML = "🎉 You have successfully subscribed!";
        headingMessage.style.color = "red";
        
        waitlistForm.reset();
        checkInputs();
    } else if (response.status === 409) {
        headingMessage.innerHTML = "✅ This email has already been registered!";

        submitButton.removeAttribute('disabled');
    }else {
        headingMessage.innerHTML = "⚠️ Failed to subscribe. Please try again!";
        headingMessage.style.color = "red";
        
        submitButton.removeAttribute('disabled');
    }
});