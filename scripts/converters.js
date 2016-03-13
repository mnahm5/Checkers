function engine2board_index(engine_index){
    var least_significant_digit = engine_index % 10;
    var most_significant_digit = (engine_index - least_significant_digit) / 10;

    if ((least_significant_digit < 1 || least_significant_digit > 8) || (most_significant_digit < 1 || most_significant_digit > 8)){
        return null;
    }
    else {
        return (least_significant_digit - 1 + (most_significant_digit - 1) * 8);
    }
}

function board_index2engine(board_index){
    var most_significant_digit = Math.floor(board_index / 8) + 1;
    var least_significant_digit = (board_index % 8) + 1;
    return (most_significant_digit * 10 + least_significant_digit);
}