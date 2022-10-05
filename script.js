const gridBox = document.createElement('div');
gridBox.classList = 'box';
document.body.appendChild(gridBox);

function createGrid(n){
    gridBox.style.setProperty('--grid-columns', n);

    for(let i = 0; i < n ** 2; i++){
        const module = document.createElement('div');

        module.addEventListener('mouseover', () => module.classList = 'toggled')
        gridBox.appendChild(module);
    }

}

function removeGrid(){
    while(gridBox.firstChild){
        gridBox.removeChild(gridBox.firstChild);
    }
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
    let gridSize = 0;

    while(true){
        gridSize = prompt('Number of squares per side:');

        if(gridSize > 100)
        alert(gridSize + ' is too big. \n \n Maximum is 100.');

        else
        break;
    }

    removeGrid();
    createGrid(gridSize);
});