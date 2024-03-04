// Job form js for front end funtionalities

const companyNameInput = document.getElementById('companyName');
const positionInput = document.getElementById('positionTitle');
const salaryInput = document.getElementById('salary');
const jobUrlInput = document.getElementById('jobLink');
const appliedInput = document.getElementById('applicationStatus');
const feedbackInput = document.getElementById('feedbackStatus');
const recruiterNameInput = document.getElementById('recruiterName');
const recruiterPhoneInput = document.getElementById('recruiterPhone');
const recruiterEmailInput = document.getElementById('recruiterEmail');
const screeeningIntInput = document.getElementById('screeningInterview');
const technicalIntInput = document.getElementById('technicalInterview');
const finalIntInput = document.getElementById('finalInterview');
const jobOfferInput = document.getElementById('jobOffer')
const updateJobBtn = document.getElementById('updateBtn');

document.getElementById('recruiterPhone').addEventListener('input', function () {
    var formattedValue = formatUSPhoneNumber(this.value);

    // Update the input value
    this.value = formattedValue;

    // Validate and display error message
    var validationErrorElement = document.getElementById('phoneValidationError');
    validationErrorElement.textContent = validateUSPhoneNumber(formattedValue);
});

document.getElementById('recruiterEmail').addEventListener('input', function () {
    // Validate and display error message
    var validationErrorElement = document.getElementById('recruiterEmailValidationError');
    validationErrorElement.textContent = validateEmailAddress(this.value);
});

// for UPDATING job card
async function updateJob(id) {
    try {
        // Sanitize recruiterPhone input (remove non-numeric characters)
        const sanitizedRecruiterPhone = recruiterPhoneInput.value.replace(/\D/g, '');

        const response = await fetch('/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                company: companyNameInput.value,
                position: positionInput.value,
                link: jobUrlInput.value,
                salary: salaryInput.value,
                haveApplied: appliedInput.checked,
                feedback: feedbackInput.checked,
                recruiterName: recruiterNameInput.value,
                recruiterPhone: sanitizedRecruiterPhone,
                recruiterEmail: recruiterEmailInput.value,
                screeningInterview: screeeningIntInput.value,
                technicalInterview: technicalIntInput.value,
                finalInterview: finalIntInput.value,
                jobOffer: jobOfferInput.value
            })
        });
        await response.json();
        window.location.href = '/jobCards';
    } catch (error) {
        alert(error);
    }
};

