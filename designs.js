// Select color input
const color = document.querySelector('#colorPicker');
// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');

function makeGrid() {
    let tr, td;

    var rows = $('input[id="row"]').val(),
    cols = $('input[id="column"]').val();
   
    for (let i = 0; i < row; i++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let j = 0; j < cols; j++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}

function clearGrid() {
   
    canvas.innerHTML = '';
}

function cellColor() {
   
    canvas.addEventListener('click', function(e) {
        e.preventDefault();
      
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = color.value;
        }
    })
}

sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    clearGrid();
    makeGrid();
    cellColor();
})