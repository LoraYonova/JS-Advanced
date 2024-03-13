function validate() {
    let emailInput = document.getElementById("email");

    emailInput.addEventListener("change", function() {
        let email = emailInput.value.trim();
        let isValid = /^[a-z]+@[a-z]+\.[a-z]+$/.test(email);

        if (!isValid) {
            emailInput.classList.add("error");
        } else {
            emailInput.classList.remove("error");
        }
    });
}

