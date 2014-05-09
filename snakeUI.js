(function (root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var UI = Snakes.UI = function($el){
    this.board = new Snakes.Board();
    this.$el = $el;
  };

  UI.prototype.start = function() {
    var ui = this;
    var xx = window.setInterval(function() {
        ui.board.snake.move();

        ui.board.render();
      }, 1000
    );
    console.log(xx);
  };

})(this);
