document.addEventListener("DOMContentLoaded", function () {
    // Select form and input elements
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
  
    // Error elements
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    // Add event listener to the form on submit
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      validateForm();
    });
  
    // Function to validate the entire form
    function validateForm() {
      let isValid = true;
      
      // Validate Full Name
      if (fullName.value.length < 5) {
        fullNameError.textContent = "Name must be at least 5 characters.";
        isValid = false;
      } else {
        fullNameError.textContent = "";
      }
  
      // Validate Email
      if (!email.value.includes('@')) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
  
      // Validate Phone Number
      if (phone.value === "123456789" || phone.value.length !== 10 || isNaN(phone.value)) {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
      } else {
        phoneError.textContent = "";
      }
  
      // Validate Password
      if (
        password.value.toLowerCase() === "password" ||
        password.value.toLowerCase() === fullName.value.toLowerCase() ||
        password.value.length < 8
      ) {
        passwordError.textContent = "Password is not strong enough.";
        isValid = false;
      } else {
        passwordError.textContent = "";
      }
  
      // Validate Confirm Password
      if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
      } else {
        confirmPasswordError.textContent = "";
      }
  
      // If all validations pass, submit form
      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    }
  });
  