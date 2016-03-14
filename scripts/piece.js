var piece = function(piece_color, piece_owner) {
    var color, owner, side, type;
    color = piece_color;
    owner = piece_owner;
    if (owner == 'user') {
        side = 'bottom';
    }
    else {
        side = 'top';
    }
    type = 'man';

    this.find_owner = function() {
        return owner;
    };

    this.find_color = function() {
        return color;
    };

    this.find_side = function() {
        return side;
    };

    this.find_type = function() {
        return type;
    };

    this.find_possible_moves = function() {
        if (type == 'man' && side == 'top') {
            return [9,11];
        }
        else if (type == 'man' && side == 'bottom') {
            return [-9,-11];
        }
        else {
            return [-9,-11,9,11];
        }
    };

    this.promote = function() {
        type = 'king';
    };
};

