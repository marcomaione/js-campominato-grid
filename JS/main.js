const gridElement = document.getElementById('grid')

for (let i = 1; i<=64; i++ ) {

    const node = document.createElement('div');
    node.classList.add('square');
    gridElement.appendChild(node);
}