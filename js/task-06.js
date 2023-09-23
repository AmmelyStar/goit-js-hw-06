const validationInput = document.querySelector("#validation-input");
// console.log(validationInput);


 const dataLength = validationInput.dataset.length;
//  console.log(dataLength);

 validationInput.addEventListener('blur', checkLength);

function checkLength(event) {
    // console.log(event);
    if (event.currentTarget.value.length < dataLength) {
        validationInput.classList.add('invalid');
          validationInput.classList.remove('valid');
    } else {
          validationInput.classList.add('valid');
          validationInput.classList.remove('invalid');
    }
           console.log(validationInput);
}