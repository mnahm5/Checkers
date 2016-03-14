var game = function(color) {
    var user_color = color;
    var pc_color;
    if (user_color == 'red') {
        pc_color = 'black';
    }
    else {
        pc_color = 'red';
    }
    var user_side = 'bottom';
    var pc_side = 'top';
    var engine_board;

    var find_initial_positions = function(side, color) {
        var begin, end;
        if (side == 'top') {
            begin = 0;
            end = 3;
        }
        else {
            begin = 5;
            end = 8;
        }
        var initial_positions = [];
        for (var i = begin; i < end; i++) {
            var j = i * 8;
            while (j < (i + 1) * 8) {
                var class_of_div = $('#' + j).attr('class').split(' ');
                if (class_of_div.indexOf('dark') != -1) {
                    initial_positions.push(j);
                    $('#' + j).prepend($('<div class="btn-circle ' + color +'"></div>'));
                }
                j++
            }
        }
        return initial_positions;
    };

    this.initialise_board = function() {
        create_board();
        engine_board = Array.apply(null, new Array(100)).map(Number.prototype.valueOf,100);
        for (var i = 0; i < 64; i++) {
            var engine_index = board_index2engine(i);
            engine_board[engine_index] = null;
        }
        var user_initial_positions = find_initial_positions(user_side,user_color);
        var pc_initial_positions = find_initial_positions(pc_side,pc_color);
        for (i = 0; i < user_initial_positions.length; i++) {
            engine_board[board_index2engine(user_initial_positions[i])] = new piece(user_color,'user');
            engine_board[board_index2engine(pc_initial_positions[i])] = new piece(pc_color,'pc');
        }
    };

    this.showMoves = function(board_index) {
        var engine_index = board_index2engine(board_index);
        var selected_piece = engine_board[engine_index];
        var possible_moves = selected_piece.find_possible_moves();
        var possible_squares = [];
        for (var i = 0; i < possible_moves.length; i++) {
            var possible_square = engine_index + possible_moves[i];
            if (engine_board[possible_square] == null) {
                possible_squares.push(engine2board_index(possible_square));
            }
        }
        return possible_squares;
    };

    this.executeMove = function(old_index,new_index) {
        old_index = board_index2engine(old_index);
        new_index = board_index2engine(new_index);
        engine_board[new_index] = engine_board[old_index];
        engine_board[old_index] = null;
    }
};