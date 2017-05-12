(function() {
  var mixin;
  /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
  var __slice = [].slice;
  /**
   * @param {Function} fn
   * @param {?} me
   * @return {?}
   */
  var __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };
  /**
   * @return {?}
   */
  mixin = function() {
    var worlds;
    var index;
    var actionArgs;
    var world;
    var target;
    var value;
    var i;
    var max;
    var iteratee;
    actionArgs = arguments[0];
    /** @type {Array.<?>} */
    worlds = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    target = actionArgs || {};
    /** @type {number} */
    i = 0;
    /** @type {number} */
    max = worlds.length;
    for (;max > i;i++) {
      world = worlds[i];
      iteratee = world || {};
      for (index in iteratee) {
        value = iteratee[index];
        if ("object" == typeof target[index]) {
          target[index] = mixin(target[index], value);
        } else {
          if (!target[index]) {
            target[index] = value;
          }
        }
      }
    }
    return target;
  };
  this.WOW = function() {
    /**
     * @param {Object} c
     * @return {undefined}
     */
    function $(c) {
      if (null == c) {
        c = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.config = mixin(c, this.defaults);
      /** @type {boolean} */
      this.scrolled = true;
    }
    return $.prototype.defaults = {
      boxClass : "wow",
      animateClass : "animated",
      offset : 0
    }, $.prototype.init = function() {
      var readyState;
      return "interactive" === (readyState = document.readyState) || "complete" === readyState ? this.start() : document.addEventListener("DOMContentLoaded", this.start);
    }, $.prototype.start = function() {
      var h2;
      var i;
      var len;
      var rawParams;
      if (this.element = window.document.documentElement, this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
        rawParams = this.boxes;
        /** @type {number} */
        i = 0;
        len = rawParams.length;
        for (;len > i;i++) {
          h2 = rawParams[i];
          this.applyStyle(h2, true);
        }
        return window.addEventListener("scroll", this.scrollHandler, false), window.addEventListener("resize", this.scrollHandler, false), this.interval = setInterval(this.scrollCallback, 50);
      }
    }, $.prototype.stop = function() {
      return window.removeEventListener("scroll", this.scrollHandler, false), window.removeEventListener("resize", this.scrollHandler, false), null != this.interval ? clearInterval(this.interval) : void 0;
    }, $.prototype.show = function(context) {
      return this.applyStyle(context), context.className = "" + context.className + " " + this.config.animateClass;
    }, $.prototype.applyStyle = function(el, deepDataAndEvents) {
      var theme;
      var dimensions;
      var ratio;
      return dimensions = el.getAttribute("data-wow-duration"), theme = el.getAttribute("data-wow-delay"), ratio = el.getAttribute("data-wow-iteration"), el.setAttribute("style", this.customStyle(deepDataAndEvents, dimensions, theme, ratio));
    }, $.prototype.customStyle = function(deepDataAndEvents, dimensions, k, ratio) {
      var j;
      return j = deepDataAndEvents ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;", dimensions && (j += "-webkit-animation-duration: " + dimensions + "; -moz-animation-duration: " + dimensions + "; animation-duration: " + dimensions + ";"), k && (j += "-webkit-animation-delay: " + k + "; -moz-animation-delay: " + k + "; animation-delay: " + k + ";"), ratio && (j += "-webkit-animation-iteration-count: " + ratio + "; -moz-animation-iteration-count: " + 
      ratio + "; animation-iteration-count: " + ratio + ";"), j;
    }, $.prototype.scrollHandler = function() {
      return this.scrolled = true;
    }, $.prototype.scrollCallback = function() {
      var node;
      return this.scrolled && (this.scrolled = false, this.boxes = function() {
        var path;
        var _len;
        var scripts;
        var acc;
        scripts = this.boxes;
        /** @type {Array} */
        acc = [];
        /** @type {number} */
        path = 0;
        _len = scripts.length;
        for (;_len > path;path++) {
          node = scripts[path];
          if (node) {
            if (this.isVisible(node)) {
              this.show(node);
            } else {
              acc.push(node);
            }
          }
        }
        return acc;
      }.call(this), !this.boxes.length) ? this.stop() : void 0;
    }, $.prototype.offsetTop = function(obj) {
      var curtop;
      curtop = obj.offsetTop;
      for (;obj = obj.offsetParent;) {
        curtop += obj.offsetTop;
      }
      return curtop;
    }, $.prototype.isVisible = function(node) {
      var mouseY;
      var height;
      var posY;
      var maxTop;
      var top;
      return height = node.getAttribute("data-wow-offset") || this.config.offset, top = window.pageYOffset, maxTop = top + this.element.clientHeight - height, posY = this.offsetTop(node), mouseY = posY + node.clientHeight, maxTop >= posY && mouseY >= top;
    }, $;
  }();
}).call(this);
