const parentContainer = document.getElementById('container');
let mouseClicked = false;
window.addEventListener('mousedown', (e) => {
    mouseClicked = true;
})

window.addEventListener('mouseup', () => {
    mouseClicked = false
})

const grid_size = 100;

for(let i=0; i<grid_size; i++) {
    const divs = document.createElement('div');
    parentContainer.appendChild(divs);
    divs.classList.add('newdiv');
    for(let j=0; j<grid_size; j++) {
        const grandChildDivs = document.createElement('div');
        divs.appendChild(grandChildDivs);
        grandChildDivs.classList.add('grandchild-div');
    }
}

const div = document.querySelectorAll('#container .newdiv .grandchild-div');

function color() {
    this.style.backgroundColor = 'yellow';
}

div.forEach(alldiv => {

        alldiv.addEventListener('mousemove', () => {
            if(mouseClicked) {
                alldiv.addEventListener('mousemove', color);
            }
        })

        // alldiv.addEventListener('mouseup', () => {
        //     alldiv.removeEventListener('mousemove', color);

        // })

})





