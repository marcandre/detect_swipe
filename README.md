jquery.detectSwipe
==================

Gives easy access to left/right/up/down swipe events for iOS and other touch devices.

Based on Andreas Waltl's [jQuery TouchWipe](http://www.netcu.de/jquery-touchwipe-iphone-ipad-library).

How to use
----------

  $(".selector").detectSwipe({
    threshold:  20, // The number of pixels your finger must move to trigger a swipe event.  Defaults is 20.
  })
  .on('swipeleft',  function(){ /*...*/ })
  .on('swiperight', function(){ /*...*/ })
  .on('swipeup',    function(){ /*...*/ })
  .on('swipedown',  function(){ /*...*/ });
