var piece = function(color, owner) {
    this.color = color;
    this.owner = owner;
    if (this.owner == 'user') {
        this.side = 'bottom';
    }
    else {
        this.side = 'top';
    }
    this.type = 'man';

    this.find_possible_moves = function() {
        if (this.type == 'man' && this.side == 'top') {
            return [9,11];
        }
        else if (this.type == 'man' && this.side == 'bottom') {
            return [-9,-11];
        }
        else {
            return [-9,-11,9,11];
        }
    };

    this.promote = function() {
        this.type = 'king';
    };
};

