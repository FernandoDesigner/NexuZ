$(document).ready(function() {
    
    tabs();
    changeCarBg();

    $(window).scroll(function() {
        $(".fade-up, .fade-right, .fade-left, .zoom-in").each(function() {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();
          
          if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
        });
      });
});

function changeCarBg(){
    $(".btn_color").on('click', function() {
        var colorTxtId = $(this).data('colortxt');
        var colorChangeId = $(this).data('colorchange');
        var colorName = $(this).data('colorname');
        var imageUrl = $(this).data('imageurl');

        $(colorTxtId).text(colorName);
        $(colorChangeId).css("background-image", "url('" + imageUrl + "')");
    });
}
function tabs(){
    $('#LuxuryView').removeClass('hide');
    $('#luxury').addClass('active');
    $('.tab').on('click', function(){
        var tabId = $(this).attr('id');
        $('.view').addClass('hide');
        $('.tab').removeClass('active');
        $('#' + tabId + 'View').removeClass('hide');
        $(this).addClass('active');
    });
    $('#luxury').on('click', function(){
        $('#LuxuryView').removeClass('hide');
    });
    $('#SUV').on('click', function() {
      $('.view').addClass('hide');
      $('.tab').removeClass('active');
      $('#SubView').removeClass('hide');
      $(this).addClass('active');
  });
}