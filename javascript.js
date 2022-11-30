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
let blocks;
let rows;
let remove;

function createGrid() {

    clearGrid();
    
    gridSize = prompt('How many squares on each side of the grid?');
    if (gridSize > 100 || isNaN(gridSize) || gridSize < 1) {
        alert('Please enter a number between 1 and 100.');
        gridSize = prompt('How many squares on each side of the grid?');
    }

    for (i = 0; i < gridSize; i++) {
        row = document.createElement('div');
        row.setAttribute('class', 'row');
        grid.appendChild(row);
        for (j = 0; j < gridSize; j++) {
            block = document.createElement('div');
            block.setAttribute('class', 'block');
            row.appendChild(block);
        };
    };

    addEffect();

};


function addEffect() {
    blocks = document.getElementsByClassName('block');

    for (i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('mouseenter', function() {
            this.setAttribute('class', 'etched');
        });
    };
};

function clearGrid() {
    if (gridSize > 0) {
        for (i = 0; i < gridSize; i++) {
            remove = document.querySelector('.row');
            remove.remove();
        };
    };
};
