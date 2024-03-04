function formatUSPhoneNumber(phoneNumber) {
    // Remove non-numeric characters
    var numericValue = phoneNumber.replace(/\D/g, '');

    // Ensure it contains at most 10 digits
    var trimmedValue = numericValue.slice(0, 10);

    return trimmedValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

function validateUSPhoneNumber(phoneNumber) {
    if (phoneNumber !== "" && !/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber)) {
        return 'Invalid phone number format';
    } else {
        return '';
    }
}

function validateEmailAddress(emailAddress) {
    if (emailAddress !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
        return 'Invalid email address format';
    } else {
        return '';
    }
}

function rangValfunc(val) {
    document.querySelector("#rangeVal").innerHTML = "$" + val;
    radius = val;
};