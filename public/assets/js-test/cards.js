document.addEventListener('DOMContentLoaded', function () {
  // Format the phone number (US format: (XXX) XXX-XXXX)
  var recruiterPhoneElements = document.querySelectorAll('.recruiter-phone');

  recruiterPhoneElements.forEach(function (element) {
    var rawPhoneNumber = element.textContent.trim();
    var formattedPhoneNumber = formatUSPhoneNumber(rawPhoneNumber);
    element.textContent = formattedPhoneNumber;
  });
});

const formatStringData = (data) => {
  if (!data) {
    return "N/A";
  }
  return data;
}

const moneyFormat = (data) => {
  if (!data) {
    return "$0.00";
  }
  return `$${parseInt(data).toFixed(2)}`;
}

const formatDateTime = (dateTime) => {
  if (!dateTime) {
    return "N/A";
  }
  const date = new Date(dateTime);
  return date.toUTCString();
}

// renders jobform by its perspective job card in order to edit job card
function getJobForm(id) {
  window.location.href = '/jobCards/' + id
};

