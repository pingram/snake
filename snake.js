(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var Snake = Snakes.Snake = function(){
    this.dir = "E";  // Go east young man.
    this.segments = Snake.makeSnake();

  };

  Snake.DIRECTIONS = [
    'N',
    'E',
    'S',
    'W'
  ];

  Snake.prototype.printSnake = function () {
    console.log("Direction is: " + this.dir);
    this.segments.forEach(function(ele) {
      console.log(" " + ele[0] + "," + ele[1]);
    });
  };

  Snake.VECTORS = {
    'N': [-1, 0],
    'E': [0, 1],
    'S': [1, 0],
    'W': [0, -1]
  }

  Snake.prototype.move = function () {
    var head = this.segments.slice(-1)[0];
    var dirArr = Snake.VECTORS[this.dir];
    var newHead = [head[0] + dirArr[0], head[1] + dirArr[1]];

    this.segments.push(newHead);
    this.segments.shift();
  };

  Snake.prototype.turn = function (newDirection) {
    if (Snake.DIRECTIONS.indexOf(this.dir) % 2 ===
        Snake.DIRECTIONS.indexOf(newDirection) % 2) {
      return false;
    }
    this.dir = newDirection;
  };

  Snake.makeSnake = function() {
    var head = Math.floor(Snakes.Board.XDIM / 2);
    snake = [];

    for (var i = 0; i < 6; i++) {
      // debugger
      snake.unshift([head, head - i]);
    }
    return snake;
  };



})(this);
