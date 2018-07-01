
$(function() {

	function makeGrid() {	 	
	 	const row = $('#inputHeight').val();			
	 	const cols = $('#inputWidth').val();		
		const canvas = $('#pixelCanvas');
		const enter = $('input[type="submit"]');
  	canvas.empty();
		
		for (let i = 0; i < row; i++) {			
			canvas.append('<tr></tr>');			
			for (let j = 0; j < cols; j++) {				
				canvas.children().last().append('<td></td>');
				}
		}
		
		$('td').click(function(e) {			
			let colorPicker = $('#colorPicker').val();			
			$(e.target).css('background-color', colorPicker);			
			;
		});
	}	
	enter.click(function(e) {		
		e.preventDefault();		
		makeGrid();
	});
}); 



