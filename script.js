const parentContainer = document.getElementById('container');

let mouseClicked = false;
window.addEventListener('mousedown', (e) => {
    mouseClicked = true;
})

window.addEventListener('mouseup', () => {
    mouseClicked = false
})

const gridSize = document.getElementById('grid-size');
let defaultGridSize = 16;

gridSize.addEventListener('click', () => {
    defaultGridSize = Number(prompt("Enter grid size (2 to 100): "));
    removeNode(parentContainer);
    addNode(parentContainer)
  
})



function removeNode(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addNode(parentNode) {
    for(let i=0; i<defaultGridSize * defaultGridSize; i++) {
        let divs = document.createElement('div');
        divs.classList.add('newdiv');
        divs.style.width = (600/defaultGridSize) + 'px';
        divs.style.height = (600/defaultGridSize) + 'px';
        parentNode.appendChild(divs);
}
}
addNode(parentContainer)

const divBox = document.querySelector('#container');


divBox.addEventListener('mousemove', (e) => {
    if (mouseClicked) {
        e.target.style.backgroundColor = 'yellow';  
        console.log(e.target) 
    }
})





