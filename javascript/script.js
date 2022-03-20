
//grid
const container = document.getElementById('container');

console.log(container)


function gridmaker (a) {  

    for (i = 0; i < (a*a); i++ ) {       
    const grid = document.createElement('grid');
    grid.classList.toggle('grid');
    container.appendChild(grid);
    grid.style.height = `${(640/a) -2 }px`;
    grid.style.width = `${(640/a) -2}px`;
    grid.style.maxHeight = `${(640/a) }px`;
    grid.style.maxWidth = `${(640/a)}px`;
    grid.addEventListener('mouseover', () => {
        const randomcolor = Math.floor(Math.random()*16777215).toString(16);
      
    grid.style.backgroundColor = '#' + randomcolor
    })}

}

    


gridmaker(16);


function removeAllChildNodes (container){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }}


const botao = document.querySelector('#btn');
botao.addEventListener('click', () => {

    let question = prompt ('How many?')

    if (question >= 100) {
        return alert ("Please select a number smaller than 100 ")
    } else {    
    removeAllChildNodes(container);

    

    gridmaker(question)
    
    }}
)

//apagar function gridmaker




