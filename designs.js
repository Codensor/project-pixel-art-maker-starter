// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

/* Create Grid Function */

function makeGrid() {
    let heightCanvas = $('#input_height').val();
    let widthCanvas = $('#input_width').val();
    for (let i = 0; i < heightCanvas; i++) {
        $('#pixel_canvas').append('<tr></tr>');
    }
    for (let j = 0; j < widthCanvas; j++) {
        $('#pixel_canvas').find('tr').append('<td></td>');
    }
};

/* End of Create Grid Function */

$('#sizePicker').submit(function(e) {
    e.preventDefault(); //stop page from reloading
    $('tr').remove(); //clear table
    makeGrid(); //calling makeGird function
});

let canvasColor = $('#colorPicker').val(); //acquiring default color

$('#colorPicker').change(function(){
    canvasColor = $('#colorPicker').val(); //aquiring user seleted color
});

$('#pixel_canvas').on('click', 'tr td', function() {
    $(this).css({"backgroundColor" : canvasColor}); // changing color of selected cell
});