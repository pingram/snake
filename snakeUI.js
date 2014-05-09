(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var UI = Snakes.UI = function($el){
    this.board = new Snakes.Board();
    this.$el = $el;
  };

  UI.prototype.start = function() {
    var ui = this;
    var timerId = window.setInterval(function() {
        ui.board.snake.move();
        var boardString = ui.board.render();
        ui.$el.html("<pre>" + boardString + "</pre>");
      }, 1000
    );

    key('up', function() { ui.board.snake.turn("N")});
    key('down', function() { ui.board.snake.turn("S")});
    key('left', function() { ui.board.snake.turn("W")});
    key('right', function() { ui.board.snake.turn("E")});

  };


})(this);
