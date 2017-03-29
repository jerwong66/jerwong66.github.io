$('#nav-icon3,#nav-icon3grey').click(
  function(){
    $('.navmenu').toggleClass('hide')
  }
)


$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4,#nav-icon3grey').click(function(){
        $(this).toggleClass('open');
    });
});


$(document).ready(function(){
  if ($('.loadingpage').hasClass('.byebye')) {
    $('#wrap').removeClass('hideme');
  }

  if ($('.loadingpage').not('.byebye')) {
    $('#wrap').addClass('hideme');
  }
});

$('.enter').click(function(){
   $('.loadingpage').addClass('byebye');
   $('#wrap').removeClass('hideme');
});

/* Big Image
$('.bigimage').scroll(function(){
    $("div").removeClass('hide');
    $(".bigimage").addClass('hide');
  });

$('html').ready(function(){
    $('#projectpage div').removeClass('hide');
    $(".bigimage").addClass('hide');
  });
*/
$('html').ready(function(){
    $('#projectpage div').removeClass('byebye');
  });


  $(document).ready(function(){

     var current_width = $(window).width();
     //do something with the width value here!
     if(current_width <= 1025)
     $('#projectpage div').removeClass('hide');
     if(current_width <= 1025)
     $('#workpage #carousel').addClass('noshow');
     if(current_width <= 1025)
     $('.mobileworkitems').removeClass('noshow');
     });
