const value = document.querySelector('#value');
const plusBtn = document.querySelector('button[data-action="increment"]');
const minBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

plusBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});

minBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

//  2 варіант
// const plusCounter = () => {
//     counterValue += 1;
//     value.textContent = counterValue;
// };

// const minCounter = () => {
//     counterValue -= 1;
//     value.textContent = counterValue;
// };

// plusBtn.addEventListener("click", plusCounter);
// minBtn.addEventListener("click", minCounter);





