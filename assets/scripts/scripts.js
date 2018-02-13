$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
$(function() {
        //Enable swiping...
        $("#gesture").swipe( {
          //Single swipe handler for left swipes
          swipeUp:function(event, direction, distance, duration, fingerCount) {
            window.location.href = "main.html";
          },
          //Default is 75px, set to 0 for demo so any distance triggers swipe
          threshold:50
        });
      });
