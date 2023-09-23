const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', spanInput);

function spanInput(event) {
if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
} else {
    nameOutput.textContent = event.currentTarget.value;
    }
};

console.log(nameOutput);