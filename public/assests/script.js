const container = document.querySelector(".container"),
    showHidePw = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link");



showHidePw.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                showHidePw.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                showHidePw.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name-input").value;
    const emailInput = document.getElementById("email-input").value;
    const passwordInput = document.getElementById("password-input").value;
    const confirmInput = document.getElementById("confirm-password-input").value;


    const charCount = nameInput.length + emailInput.length + passwordInput.length + confirmInput.length;
    const wordCount = nameInput.split(" ").length + emailInput.split(" ").length + passwordInput.split(" ").length + confirmInput.split(" ").length;
    const reversedInput = nameInput.split("").reverse().join("") + " " + emailInput.split("").reverse().join("") + " " + passwordInput.split("").reverse().join("") + " " + confirmInput.split("").reverse().join("");
    const upperInput = nameInput.toUpperCase() + " " + emailInput.toUpperCase() + " " + passwordInput.toUpperCase() + " " + confirmInput.toUpperCase();
    const lowerInput = nameInput.toLowerCase() + " " + emailInput.toLowerCase() + " " + passwordInput.toLowerCase() + " " + confirmInput.toLowerCase();


    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>Character count: ${charCount}</p> <br>
        <p>Word count: ${wordCount}</p> <br>
        <p>Reversed input: ${reversedInput}</p> <br>
        <p>Uppercase input: ${upperInput}</p> <br>
        <p>Lowercase input: ${lowerInput}</p>`;
});