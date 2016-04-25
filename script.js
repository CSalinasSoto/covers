$(document).ready(function(){
animationHover('.test', 'zoomIn');

function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated zoomIn' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated zoomIn' + animation);
      }, 2000);
    }
  );
};
})