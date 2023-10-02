let gridContainer = document.querySelector('.gridContainer');
let gridSizeBtn = document.querySelector('.gridSize');

function makeGrid(boxes) {
  for (let i = 0; i < boxes * boxes; i++) {
    const cell = document.createElement('div');
    cell.classList.add('gridCell');
    cell.style.width = 500 / boxes + 'px';
    cell.style.height = 500 / boxes + 'px';
    gridContainer.appendChild(cell);
  }
  let cells = document.querySelectorAll('.gridCell'); // Correct selector
  console.log(cells.length)
  cells.forEach(cell => {
    cell.addEventListener('mouseout', function () {
      cell.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    });
  });
}

makeGrid(16); // Use the same value here as when creating the grid

gridSizeBtn.addEventListener('click', function () {
  let gridSize = prompt('how many boxes you want on each side');
    if (gridSize >= 100) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
          }
          
            makeGrid(gridSize);
    }else{
        alert('make boxes less than 100 per side')
    }

});
