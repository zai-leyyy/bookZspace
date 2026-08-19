const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "🙈";

    } else {

        password.type = "password";
        togglePassword.textContent = "👁";

    }

});


const confirmPassword = document.getElementById("confirmPassword");
const toggleConfirm = document.getElementById("toggleConfirm");

toggleConfirm.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";
        toggleConfirm.textContent = "🙈";

    } else {

        confirmPassword.type = "password";
        toggleConfirm.textContent = "👁";

    }

});