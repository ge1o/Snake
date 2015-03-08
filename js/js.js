//
// Создание матрицы.
//
function createMatrix(rows, cols, cell_size)
{
	var matrix = document.getElementById('snake');
	matrix.style.width = cell_size*cols + 'px';
	matrix.style.height = cell_size*rows + 'px';
	
	m = rows * cols;
	
	for (var i = 0; i < m; i++)
	{
		var div = document.createElement('div');
		div.className = 'cell';
		matrix.appendChild(div);
	}
}

//
// Чтение ячейки матрицы.
//
function getCell(row, col)
{
	// Функция принимает координаты ячейки
	// должна вернуть true, если она закрашена,
	// false, если не закрашена.
	
	console.log(row, col);
	
	
}

//
// Установка ячейки матрицы.
//
function setCell(row, col, cols, val)
{

	// Функция принимает координаты ячейки
	// если val == true, закрашивает ячейку,
	// иначе убирает закраску.
	
	var matrix = document.getElementById('snake');
	// TODO: Check if pos is in range
	var pos = (row-1)*cols+col-1;
	var cell = matrix.children[pos];
	
	if(val)
		cell.style.backgroundColor = '#1d1d1d';
	else 
		cell.style.backgroundColor = 'transparent';
		
}

//
// Точка входа.
//
window.onload = function()
{

	var rows = 10;
	var cols = 10;
	var cell_size = 30;
	var grid = {row:5, col:1}
	
	createMatrix(rows, cols, cell_size);	
	setCell(grid.row, grid.col, cols, true);
	
	document.onkeydown = function(e)
	{
		var event = e || window.event;
		var keyCode = event.keyCode || event.which;
		
		setCell(grid.row, grid.col, cols, false); // Off
		
		switch(keyCode)
		{
			case 37:
				//if(grid.col > 1)
					grid.col--;
				break;
			case 38:
				//if(grid.row > 1)
					grid.row--;
				break;
			case 39:
				//if(grid.col < cols)
					grid.col++;
				break;
			case 40:
				//if(grid.row < rows)
					grid.row++;
				break;
		}
		console.log(grid.col, grid.row);
		if((grid.col == 0) || (grid.row == 0) || (grid.col == cols+1) || (grid.row == rows+1))
		{
			// TODO: Kill it here
			alert('Game Over');
			var matrix = document.getElementById('snake').innerHTML = "";
			createMatrix(rows, cols, cell_size);	
			setCell(grid.row, grid.col, cols, true);
		} else
		{
		//console.log(grid.col);
		setCell(grid.row, grid.col, cols, true); // On
		var currCell = (grid.row, grid.col);
		getCell(grid.row, grid.col);
		}
		
	}

}				
