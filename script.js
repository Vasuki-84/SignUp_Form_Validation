
document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector(".validation-form ");

    form.addEventListener("submit" , (error) => {
        error.preventDefault();

        let validationSuccess = true;

        //Regex pattern 
        const namePattern = /^[A-Za-z\s]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^[A-za-z0-9!@#$%^&*.]{6,}$/;
        const confirmPasswordPattern = /^[A_Za-z0-9!@#$%^&*.]$/;

        // Input fields
        const fullName =  document.getElementById("fullName");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const termsCheckbox = document.getElementById("termsCheckbox");


        // clear previous errors
        document.querySelectorAll(".error").forEach(clear => clear.textContent= "");

        // Testing user input
        if(!namePattern.test(fullName.value)){
            document.getElementById("nameError").textContent= "Please provide a valid email.";
            validationSuccess = false;
        } 

    } )
})


