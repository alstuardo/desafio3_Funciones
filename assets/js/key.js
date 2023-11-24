const key = document.getElementById('key');

const addDiv = function(color){
    let newDiv = document.createElement('div');
    newDiv.style.width = '200px'
    newDiv.style.height = '200px'
    newDiv.style.backgroundColor = color
    newDiv.style.border = '3px solid black' 
    document.body.appendChild(newDiv);  
}
   
document.addEventListener('keydown', function (event) { 
    if (event.key === 'a' || event.key === 'A') {
    key.style.backgroundColor = 'pink'
} else if (event.key === 's'|| event.key === 'S') { 
    key.style.backgroundColor = 'orange'
} else if (event.key === 'd'|| event.key === 'D') { 
    key.style.backgroundColor = 'lightblue'
} else if (event.key === 'q'|| event.key === 'Q') { 
    addDiv('purple')
} else if (event.key === 'w'|| event.key === 'W') { 
    addDiv('gray')
} else if (event.key === 'e'|| event.key === 'E') { 
    addDiv('brown')
}})