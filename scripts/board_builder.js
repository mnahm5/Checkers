var square_counter;

function create_board() {
    square_counter = 0;
    for (var i = 0; i < 16; i++){
        $('#board').append($('<div id=group' + i + ' class="row col-md-6 col-xs-6"></div>'));
        create_squares(i);
    }
}

function create_squares(index){
    var type_of_square;
    var x = Math.floor(index/2);
    if (x % 2){
        type_of_square = 'light';
    }
    else {
        type_of_square = 'dark';
    }
    for (var j = 0; j < 4; j++){
        if (type_of_square == 'light'){
            type_of_square = 'dark';
            $('#group' + index).append($('<div id="' + square_counter + '" class="square light col-md-3 col-xs-3"></div>'));
        }
        else {
            type_of_square = 'light';
            $('#group' + index).append($('<div id="' + square_counter + '" class="square dark col-md-3 col-xs-3"></div>'));
        }
        square_counter++;
    }
}