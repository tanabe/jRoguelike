/**
 *  rogue like game
 *  require jQuery
 */
(function() {
  //constants
  var CHARACTER_WIDTH = 10;
  var CHARACTER_HEIGHT = 10;
  var WORLD_WIDTH = 400;
  var WORLD_HEIGHT = 400;

  var LEFT = {name: "left", code: 104, x: -10, y: 0};
  var RIGHT = {name: "right", code: 108, x: 10, y: 0};
  var UP = {name: "up", code: 107, x: 0, y: -10};
  var DOWN = {name: "down", code: 106, x: 0, y: 10};

  //variables
  var hero;

  /**
   *  DisplayObject Class
   */
  var DisplayObject = function() {
    this.x = 0;
    this.y = 0;
    this.graphic = null;
  };

  DisplayObject.prototype.move = function(direction) {
    var nextX = this.x + direction.x;
    var nextY = this.y + direction.y;
    if (
      nextX < 0 ||
      nextX > WORLD_WIDTH - CHARACTER_WIDTH ||
      nextY < 0 ||
      nextY > WORLD_HEIGHT - CHARACTER_HEIGHT) {
      return;
    }
    this.x = nextX;
    this.y = nextY;
  };

  /**
   *  Hero Class
   *  @param graphic DOM Object
   */
  var Hero = function(graphic) {
    this.graphic = graphic;
  };
  Hero.prototype = new DisplayObject;

  /**
   *  do render
   */
  var render = function() {
    hero.graphic.css("left", hero.x + "px");
    hero.graphic.css("top", hero.y + "px");
  };

  /**
   *  initialize events
   */
  var initializeEvent = function() {
    //init key event
    $(window).keypress(function(event) {
      switch (event.which) {
        case LEFT.code:
        hero.move(LEFT);
        break;

        case RIGHT.code:
        hero.move(RIGHT);
        break;

        case UP.code:
        hero.move(UP);
        break;

        case DOWN.code:
        hero.move(DOWN);
        break;
      }
      render();
    });
  };

  /**
   *  initialize(entry point)
   */
  var initialize = function() {
    hero = new Hero($("#hero"));
    initializeEvent();
  };

  $(function() {
    initialize();
  });
})();
