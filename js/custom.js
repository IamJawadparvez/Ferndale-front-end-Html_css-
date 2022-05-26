var span = $("span");

$("span").click(function(){
   
    if(span.hasClass("active")) {
        span.removeClass("active");
        span.addClass("cross");
    }else{
        span.removeClass("cross");
        span.addClass("active");
    }
});