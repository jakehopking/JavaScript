$(document).on("click","#scrollToTop",function(){
    $('html,body').animate({scrollTop: 0}, 1500);

});
$(document).on("click","#scrollToBottom",function() {
  var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    $('html,body').animate({ scrollTop: windowHeight + documentHeight },1500);
});