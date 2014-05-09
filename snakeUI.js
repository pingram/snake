(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var UI = Snakes.UI = function($el){
    this.board = new Snakes.Board();
    this.$el = $el;
  };

  UI.prototype.start = function() {
    var ui = this;
    ui.render();
    var timerId = window.setInterval(function() {
        ui.board.snake.move();
        ui.render();
        // var boardString = ui.board.render();
        // ui.$el.html("<pre>" + boardString + "</pre>");
      }, 1000
    );

    key('up', function() { ui.board.snake.turn("N")});
    key('down', function() { ui.board.snake.turn("S")});
    key('left', function() { ui.board.snake.turn("W")});
    key('right', function() { ui.board.snake.turn("E")});

  };

  UI.prototype.render = function(){
   this.$el.html("");
    for (var i = 0; i < Snakes.Board.XDIM; i++) {
      for (var j = 0; j < Snakes.Board.YDIM; j++) {
        $div = $('<div>');
        $div.addClass('tile');
        var currentTile = [i,j];
        var snakeSegments = 0;
        var head = this.board.snake.segments.slice(-1)[0];
        var isSnake = false;
        for (var q = 0; q < this.board.snake.segments.length; q++) {
          if (_.isEqual(currentTile, this.board.snake.segments[q])) {
            snakeSegments++;
            $div.addClass('snake');
            if (_.isEqual(currentTile, head)) {
              $div.toggleClass('snake');
              $div.addClass('snakehead');
            }
          }
        }
        this.$el.append($div);
      }
    }
  };

})(this);
