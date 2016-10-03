$(document).ready(function() {

  var owl = $("#owl-demo");

  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
  });

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })

});