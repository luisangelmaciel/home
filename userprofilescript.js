$(document).ready(function(){
    $("p.bio").shorten({
        "showChars": 70, // 120
    });

    $(".social li i").mouseenter(function() {
    	$(this).toggleClass("scroll");
    })
    .mouseleave(function() {
    	$(this).toggleClass("scroll");
    });
});