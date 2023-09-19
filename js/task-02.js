const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('ul#ingredients');

const li = document.createElement('li');

const markup = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  list.append(li);
  return li;

});
list.append(...markup);
 console.log(list);




