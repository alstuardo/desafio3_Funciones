const colors = document.getElementsByClassName('colors');

const changeColor = (event) => event.target.style.backgroundColor = 'black';

colors[0].addEventListener('click', changeColor);
colors[1].addEventListener('click', changeColor);
colors[2].addEventListener('click', changeColor);
colors[3].addEventListener('click', changeColor);

//Another way
// const blue = document.getElementById('blue');
// const red = document.getElementById('red');
// const green = document.getElementById('green');
// const yellow = document.getElementById('yellow');

// const changeColor = (event) => event.target.style.backgroundColor = 'black';

// blue.addEventListener('click', changeColor);
// red.addEventListener('click', changeColor);
// green.addEventListener('click', changeColor);
// yellow.addEventListener('click', changeColor);


