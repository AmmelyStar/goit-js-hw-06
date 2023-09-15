const size = document.querySelectorAll('.item');
console.log(`Number of categories:`, size.length);

size.forEach((el) => {
    const element = el.querySelector('h2').textContent;
    console.log(`Category:`, element);

    const caunt = el.querySelectorAll('li').length;

    console.log(`Elements:`, caunt);


});

