(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var Snake = Snakes.Snake = function(){
    this.dir = "E";  // Go east young man.
    this.segments = Snake.makeSnake();

  };


  Snake.prototype.move = function () {

  };

  Snake.prototype.turn = function (newDirection) {

  };

  Snake.makeSnake = function() {
    var head = Math.floor(Snakes.Board.XDIM / 2);
    snake = [];

    for (var i = 0; i < 6; i++) {
      snake.push([head, head - i]);
    }
    return snake;
  };



})(this);
