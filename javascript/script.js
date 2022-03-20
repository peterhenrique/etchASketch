
//grid
const container = document.querySelector('#container');

function gridmaker (a) {
    for (i = 0; i < (a*a); i++ ) {
    const grid = document.createElement('grid');
    grid.classList.toggle('grid');
    container.appendChild(grid);
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'black';
    })

}

    }

gridmaker(16);


const botao = document.querySelector('#btn');
botao.addEventListener('click', () => {
gridmaker(16)
})

//apagar function gridmaker




