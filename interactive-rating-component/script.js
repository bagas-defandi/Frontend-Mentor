const chooseNumber = document.querySelectorAll(".radio");
const btnSubmit = document.querySelector(".btn-submit");
const rating = document.querySelector(".card--rating");
const thanks = document.querySelector(".card--thanks");
const textSelected = document.querySelector(".selected");

console.log(chooseNumber[3].value);

btnSubmit.addEventListener("click", () => {
    chooseNumber.forEach(el => {
        if(el.checked) {
            rating.remove();
            thanks.style.display = "grid";
            textSelected.textContent = `You selected ${el.value} out of 5`;
        }
    })
});