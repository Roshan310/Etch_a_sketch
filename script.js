const parentContainer = document.getElementById('container');

for(let i=0; i<30; i++) {
    const divs = document.createElement('div');
    parentContainer.appendChild(divs);
    divs.classList.add('newdiv');
    for(let j=0; j<30; j++) {
        const grandChildDivs = document.createElement('div');
        divs.appendChild(grandChildDivs);
        grandChildDivs.classList.add('grandchild-div');
    }
}

const div = document.querySelectorAll('#container .newdiv .grandchild-div');
console.log(div);

function color() {
    this.style.backgroundColor = 'yellow';
}

div.forEach(alldiv => {
    alldiv.addEventListener('mousemove', color)


})





