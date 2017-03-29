$(window).on("load", function() {
  $(".ic_container").capslide({
      caption_color	: 'white',
      caption_bgcolor	: '',
      overlay_bgcolor : 'black',
      border			: '',
      showcaption	    : true,
  });

  $(window).on("resize", function() {
    var container = $('.ic_container');
    container.css({
      width: "",
      height: ""
    });
    window.setTimeout(function(){
      var _img = container.find('img:first');
      var w = _img.css('width');
      var h = _img.css('height');
      $('.ic_caption',container).css({width:w});
      container.css({width:w , height:h});
    }, 1500);

  });

});
