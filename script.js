const gridBox = document.createElement('div');
gridBox.classList = 'box';
document.body.appendChild(gridBox);

function createGrid(n){
    gridBox.style.setProperty('--grid-columns', n);

    for(let i = 0; i < n ** 2; i++){
        let div = document.createElement('div');
        gridBox.appendChild(div);
    }
}

function removeGrid(){
    while(gridBox.firstChild){
        gridBox.removeChild(gridBox.firstChild);
    }
}


