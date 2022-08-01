const btnSubmit = document.querySelector(".button-submit");
const formElements = document.querySelectorAll('#introForm input');

const getInputValue = () => {
    const allInput = [];
    formElements.forEach((el, i) => {
        if (i === formElements.length - 1) {
            allInput.push(el.value); // do not trim password input
        } else {
            allInput.push(el.value.trim()); // trim whitespace in other input

        }
    });
    return allInput;
};

const getPlaceholder = () => {
    const allPlaceholder = [];
    formElements.forEach(el => {
        allPlaceholder.push(el.getAttribute("placeholder"))
    });
    return allPlaceholder;
};

const showError = (inputElement, icon, html) => {
    inputElement.style.borderColor = "var(--clr-primary)";
    icon.style.display = "block";
    inputElement.insertAdjacentHTML("afterend", html);
}

const hideError = (inputElement, icon, inputParent) => {
    inputElement.style.borderColor = "hsla(246, 25%, 77%, .3)";
    icon.style.display = "none";
    inputParent.querySelector(".text-error")?.remove();
}

const checkEmailFormat = () => {
    const emailElement = document.getElementById("email");
    const emailValue = emailElement.value.trim();
    const emailParent = emailElement.parentNode;
    const errorHtml = `<p class="text-error">Looks like this is not an email</p`;
    const errorIcon = emailParent.querySelector("img");

    // regex I use -> http://emailregex.com/
    const regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    // if email format is wrong
    if(!regexEmail.test(emailValue) && emailValue !== "") {
        showError(emailElement, errorIcon, errorHtml);
    } 
    
    // if email format is right
    if(regexEmail.test(emailValue)){
        hideError(emailElement, errorIcon, emailParent);
    }
}

const checkEmptyValues = () => {
    const inputValues = getInputValue();
    const placeholders = getPlaceholder();

    inputValues.forEach((inputValue, i) => {
        const inputParent = formElements[i].parentNode;
        const inputElement = formElements[i];
        const errorHtml = `<p class="text-error">${placeholders[i]} cannot be empty</p>`;
        const errorIcon = inputParent.querySelector("img");

        // if input parent do not have child .text-error 
        if(inputValue === "" && !inputParent.contains(inputParent.querySelector(".text-error"))) {
            showError(inputElement, errorIcon, errorHtml);
        }

        // if input parent have child .text-error
        if(inputValue !== "" && inputParent.contains(inputParent.querySelector(".text-error"))) {
            hideError(inputElement, errorIcon, inputParent)
        }
    })
}

btnSubmit.addEventListener("click", () => {
    checkEmptyValues();
    checkEmailFormat();
});