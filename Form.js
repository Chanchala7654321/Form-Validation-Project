document.addEventListener("DOMContentLoaded", function () {

    const signUpForm = document.querySelector(".main form");
    const loginForm = document.querySelector(".main2");
    const main3 = document.querySelector(".main3");
    const button = document.querySelector('#button');
    const loginButton = document.querySelector("#button3");

    loginForm.style.display = "none";
    main3.style.display = "none";

    button.onclick = function () {
        let inputFields = signUpForm.querySelectorAll('input');
        let allFilled = true;

        inputFields.forEach(function (input) {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        if (!allFilled) {
            alert("Please fill this fast!");
        }
    };

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.querySelector(".main #name").value.trim();
        let email = document.querySelector(".main #email").value.trim();
        let password1 = document.querySelector(".main #password1").value.trim();
        let password2 = document.querySelector(".main #password2").value.trim();
        let number = document.querySelector(".main #number").value.trim();
        let checkbox = document.querySelector(".main #I").checked;
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password1) || !passwordRegex.test(password2)) {
            alert("Please use in password one letter, one number, and one special character.");
            return;
        }

        if (name === "" || email === "" || password1 === "" || password2 === "" || number === "" || !checkbox) {
            alert("Please fill all");
            return;
        }

        if (password1 !== password2) {
            alert("Passwords not match.");
            return;
        }

        alert("Sign-up successful!");

        document.querySelector(".main").style.display = "none";
        loginForm.style.display = "block";

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password1);
    });

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();

        let email = document.querySelector(".main2 #email").value.trim();
        let password = document.querySelector(".main2 #password1").value.trim();
        let checkbox = document.querySelector(".main2 #I").checked;
        let savedEmail = localStorage.getItem("userEmail");
        let savedPassword = localStorage.getItem("userPassword");

        if (email === "" || password === "" || !checkbox) {
            alert("Please fill all");
            return;
        }

        if (email !== savedEmail || password !== savedPassword) {
            alert("Email or password is incorrect.");
            return;
        }

        alert("Login successful!");

        loginForm.style.display = "none";
        main3.style.display = "block";
    });

});
