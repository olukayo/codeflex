document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.querySelector("form");
  const firstName = document.getElementById("firstName");
  const otherName = document.getElementById("otherName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  
  form.addEventListener("submit", function (event) {
    let isValid = true;

    
    clearErrors();

    
    if (!firstName.value.trim()) {
      showError(firstName, "First name is required.");
      isValid = false;
    }

    
    if (!otherName.value.trim()) {
      showError(otherName, "Other name is required.");
      isValid = false;
    }

    
    if (!email.value.trim()) {
      showError(email, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, "Please enter a valid email address.");
      isValid = false;
    }

    
    if (!phone.value.trim()) {
      showError(phone, "Phone number is required.");
      isValid = false;
    } else if (!isValidPhoneNumber(phone.value)) {
      showError(phone, "Please enter a valid phone number.");
      isValid = false;
    }

    
    if (!password.value.trim()) {
      showError(password, "Password is required.");
      isValid = false;
    } else if (password.value.length < 6) {
      showError(password, "Password should be at least 6 characters.");
      isValid = false;
    }

    
    if (!confirmPassword.value.trim()) {
      showError(confirmPassword, "Confirm password is required.");
      isValid = false;
    } else if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match.");
      isValid = false;
    }

    
    if (isValid) {
      event.preventDefault();  
      alert("Form submitted successfully!");
      form.reset();  
    }

    
    if (!isValid) {
      event.preventDefault();
    }
  });

  
  function showError(inputElement, message) {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error");
    errorMessage.textContent = message;
    inputElement.insertAdjacentElement("afterend", errorMessage);
  }

  
  function clearErrors() {
    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach((error) => error.remove());
  }

  
  
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }

  
  function isValidPhoneNumber(phone) {
    const phonePattern = /^(?:\+?\d{1,4}[\s-])?(\(?\d{1,4}\)?[\s-]?)?(\d{1,4})[\s-]?\d{1,4}[\s-]?\d{1,4}$/;
    return phonePattern.test(phone);
  }
});
