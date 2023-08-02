const parentContainer = document.getElementById('container');

let mouseClicked = false;
window.addEventListener('mousedown', (e) => {
    mouseClicked = true;
})

window.addEventListener('mouseup', () => {
    mouseClicked = false
})

const grid_size = 10;

for(let i=0; i<grid_size * grid_size; i++) {
    let divs = document.createElement('div');
    divs.style.width = (600/grid_size) + 'px';
    divs.style.height = (600/grid_size) + 'px';
    parentContainer.appendChild(divs);
    divs.classList.add('newdiv');


}

const div = document.querySelectorAll('#container .newdiv');

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





