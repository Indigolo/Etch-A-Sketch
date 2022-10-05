const gridBox = document.createElement('div');
gridBox.classList = 'box';
document.body.appendChild(gridBox);

function createGrid(n){
    gridBox.style.setProperty('--grid-columns', n);

    let darkness = 0;

    for(let i = 0; i < n ** 2; i++){
        const module = document.createElement('div');

        module.addEventListener('mouseover', () => {

            const red = Math.random() * (256 - darkness * 25.6);
            const green = Math.random() * (256 - darkness * 25.6);
            const blue = Math.random() * (256 - darkness * 25.6);

            module.style.setProperty('--random-red', red);
            module.style.setProperty('--random-green', green);
            module.style.setProperty('--random-blue', blue);

            if(darkness == 10)
            darkness = 0;

            else
            darkness += 1;

            module.classList = 'toggled'
        })

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