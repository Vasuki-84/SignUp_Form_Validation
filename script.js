document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".validation-form ");

  form.addEventListener("submit", (error) => {
    error.preventDefault();

    let validationSuccess = true;

    //Regex pattern
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^[A-za-z0-9!@#$%^&*.]{6,}$/;
    const confirmPasswordPattern = /^[A_Za-z0-9!@#$%^&*.]$/;

    // Input fields
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const termsCheckbox = document.getElementById("termsCheckbox");

    // clear previous errors
    document.querySelectorAll(".error").forEach((clear) => {
      clear.textContent = "";
      clear.style.color = "";
    });

    // Testing user input
    if (!namePattern.test(fullName.value)) {
      document.getElementById("nameError").style.color = "red";
      document.getElementById("nameError").textContent =
        "Please provide a valid name.";
      validationSuccess = false;
    }

    if (!emailPattern.test(email.value)) {
      document.getElementById("emailError").style.color = "red";
      document.getElementById("emailError").textContent =
        "Please provide a valid email.";
      validationSuccess = false;
    }

    if (!passwordPattern.test(password.value)) {
      document.getElementById("passwordError").style.color = "red";
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters.";
      validationSuccess = false;
    }
    // confirm password
    if (password.value === "" || confirmPassword.value === "") {
      document.getElementById("confirmPasswordError").style.color = "red";
      document.getElementById("confirmPasswordError").textContent =
        "Please enter both password fields.";
      validationSuccess = false;
    } else if (password.value !== confirmPassword.value) {
      document.getElementById("confirmPasswordError").style.color = "red";
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match.";
      validationSuccess = false;
    } else {
      document.getElementById("confirmPasswordError").style.color =
        "rgba(90, 248, 90, 0.7)";
      document.getElementById("confirmPasswordError").textContent =
        "Passwords match ✅";
    }

    // check box verification
    if (!termsCheckbox.checked) {
      document.getElementById("checkBoxError").style.color = "red";
      document.getElementById("checkBoxError").textContent =
        "You must select checkBox before submitting";
      validationSuccess = false;
    }
    if (validationSuccess) {
      alert("Form submitted successfully");
      form.reset();
    }
    document.querySelectorAll(".error").forEach((clear) => {
      clear.textContent = "";
      clear.style.color = "";
    });
  });
});
