let body = document.querySelector('body');

let button = document.createElement('button');
button.setAttribute('class', 'button');
button.textContent = 'PRESS TO SET GRID'
body.appendChild(button);

let grid = document.querySelector('div');
grid.setAttribute('class', 'grid');
body.appendChild(grid);

let gridSize = 0;

// prompt('How many squares on each side of the grid?')

button.addEventListener('click', (e) => {
    createGrid();
})

let i;
let j;
let row;
let block;

function createGrid() {
    gridSize = prompt('How many squares on each side of the grid?');
    for (i = 0; i < gridSize; i++) {
        row = document.createElement('div');
        row.setAttribute('class', 'row');
        grid.appendChild(row);
        for (j = 0; j < gridSize; j++) {
            block = document.createElement('div');
            block.setAttribute('class', 'block');
            row.appendChild(block);
        }
    }
    blocks = document.getElementsByClassName('block');
    blocks.forEach(addHover())
}

function addHover(div) {
    div.addEventListener('hover', (e) => {
        etch();
    })
}

function etch() {
    setAttribute('class', 'etched');
}