/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($) {
  $.fn.touchwipe = function(settings) {
    var config = {
      threshold: 20,
      preventDefaultEvents: true
    };

    if (settings) $.extend(config, settings);

    this.each(function() {
      var startX;
      var startY;
      var isMoving = false;

      function onTouchMove(e) {
        if(config.preventDefaultEvents) {
          e.preventDefault();
        }
        if(isMoving) {
          var x = e.touches[0].pageX;
          var y = e.touches[0].pageY;
          var dx = startX - x;
          var dy = startY - y;
          var dir;
          if(Math.abs(dx) >= config.threshold) {
            dir = dx > 0 ? 'left' : 'right'
          }
          else if(Math.abs(dy) >= config.threshold) {
            dir = dy > 0 ? 'down' : 'up'
          }
          if(dir) {
            this.removeEventListener('touchmove', onTouchMove);
            isMoving = false;
            $(this).trigger('swipe' + dir);
          }
        }
      }

      function onTouchStart(e) {
        if (e.touches.length == 1) {
          startX = e.touches[0].pageX;
          startY = e.touches[0].pageY;
          isMoving = true;
          this.addEventListener('touchmove', onTouchMove, false);
        }
      }
      if ('ontouchstart' in document.documentElement) {
        this.addEventListener('touchstart', onTouchStart, false);
      }
    });

    return this;
  };

})(jQuery);
