var Game = new game('red');
Game.initialise_board();

var selected_board_index;
$('#board').on('click','.btn-circle',function() {
    $('.possible_move').removeClass('possible_move');
    $('.selected').removeClass('selected');
    $(this).parent().addClass('selected');

    selected_board_index = $(this).parent().attr('id');
    var possible_squares = Game.showMoves(selected_board_index);
    for (var i = 0; i < possible_squares.length; i++) {
        $('#' + possible_squares[i]).addClass('possible_move');
    }
});

$('#board').on('click','.possible_move',function() {
    $('.possible_move').removeClass('possible_move');
    $('.selected').removeClass('selected');
    var new_position = $(this).attr('id');
    Game.executeMove(selected_board_index,new_position);
    var piece_class = $('#' + selected_board_index + ' > .btn-circle').remove().attr('class');
    $(this).append('<div class="' + piece_class + '"></div>');
});
