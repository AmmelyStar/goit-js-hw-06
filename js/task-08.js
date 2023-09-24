const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', loginForm);

function loginForm(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert(`Будь ласка заповніть усі поля`);
    };
   
    const data = {
        email: email.value,
        password: password.value
    }

    console.log(data);

    event.currentTarget.reset();
}