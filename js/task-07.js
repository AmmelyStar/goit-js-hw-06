const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', spanChange);
function spanChange(event) {
   
    spanEl.style.fontSize = event.currentTarget.value + 'px';
    
};
console.log(spanChange);