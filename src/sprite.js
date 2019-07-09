//-------------AGENT RENDERER / Movement ---------------//
define(function() {
  return Toolbox.Base.extend({
    constructor: function(options) {
      this.position = options.position || {x: 0,y: 0};
      this.collision = options.collision;
      this.tileset = options.tileset;
    },
    doMove: function(moveX, moveY) {
      this.position.x = this.collision.getPosition(0, this.position.x, this.position.y, moveX);
      this.position.y = this.collision.getPosition(1, this.position.x, this.position.y, moveY);
    },
    setPosition: function(pos) {
      pos = pos || {};
      this.position.x = pos.x || 0;
      this.position.y = pos.y || 0;
    },
    getSprite: function() {
      return this.tileset.sprite;
    },
    getTileId: function() {
      return (Math.floor(new Date().getTime() / 500) % 2) ? 'standing' : 'standing_alt';
    },
    getTileSpec: function() {
      return this.tileset.tileSpec;
    }
  });
});

// -------------CHAR RENDERER -------------//
define(['CreatureRenderer'], function(Renderer) {
return Renderer.extend({
    constructor: function(options) {
      this.agents = options.agents;
      Renderer.prototype.constructor.call(this, options);
    },
    draw: function() {
      var self = this;
      this.context.clearRect(0, 0, this.w, this.h);
      _(this.agents).each(function(agent) {
        self.tileSpec = agent.getTileSpec();
        self.drawTile(agent.getSprite(), agent.getTileId(), agent.position.x, agent.position.y);
      });
    }
  });
});

//-------------TileSet ------------------//

define(function() {

  function Tileset(options) {
    this.onspriteload = options.onspriteload || function() {};
    this.onReadyCb = options.onReady || function() {};
    this.tileSpec = options.tileSpec || {};

    this.sprite = new Image();
    this.sprite.onload = this.onSpriteLoad.bind(this);
    this.spriteLoaded = false;
    this.sprite.src = options.spritePath;

    $.getJSON(options.specPath, this.onSpecLoad.bind(this));
  }

  Tileset.prototype.onSpriteLoad = function(e) {
    this.spriteLoaded = true;
    this.onReady();
  };

  Tileset.prototype.onSpecLoad = function(data) {
    this.specLoaded = true;
    this.tileSpec = data;
    this.onReady();
  };

  Tileset.prototype.onReady = function(){
    if (this.specLoaded && this.spriteLoaded && _.isFunction(this.onReadyCb)) {
      this.onReadyCb();
    }
  };

  Tileset.prototype.getSprite = function(){
    return this.sprite;
  };

  Tileset.prototype.getTileSpec = function(){
    return this.tileSpec;
  };

  return Tileset;

});
