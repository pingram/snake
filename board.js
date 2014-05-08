(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var Board = Snakes.Board = function(){
    this.snake = new Snakes.Snake();
    this.apples = [];
    this.render();
  };

  Board.XDIM = Board.YDIM = 50;

  // Board.setUpTiles = function () {
  //   var tiles = [];
  //   for (var i = 0; i < Board.XDIM; i++) {
  //     var row = [];
  //     for (var j = 0; j < Board.YDIM; j++) {
  //       row.push("");
  //     }
  //     tiles.push(row);
  //   }
  //   return tiles;
  // }

  Board.prototype.render = function() {

    var printString = "";
    var printCell = function (cell, isSnake) {
      if (isSnake) {
        printString += "S";
      } else {
        printString += ".";
      }
    };

    for (var i = 0; i < Board.XDIM; i++) {
      for (var j = 0; j < Board.YDIM; j++) {
        var currentTile = [i,j];
        var isSnake = false;
        for (var q = 0; q < this.snake.segments.length; q++) {
          if (_.isEqual(currentTile, this.snake.segments[q])) {
            isSnake = true;
          }
        }
        printCell(this.tiles[i][j], isSnake);
      }
      printString += "\n";
    }
    console.log(printString);
  };

})(this);
