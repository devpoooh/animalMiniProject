// console.log(evt); // jquery
// console.log(this); //js

$(document).ready(function(){
    // navbar 아코디언
    // 너무 창이 작아지면 접어버리기!
    // resize될때마다 하면 렉걸림 -> bind 사용
    var resizeTimer;

    // window 사이즈가 변경될때마다 -> 700px보다 작아지면 navbar숨기기
    function resizeFunction(){
        //리사이즈시 실행할 코드
        var navbar = $('.navbar');
        if($(window).width() < 700){
            // console.log(navbar);
            navbar.hide();
        }else{
            navbar.show();
        }
    }    

    // window resize되면
    $(window).bind('resize', function( ) {
        window.clearTimeout( resizeTimer );
        resizeTimer = window.setTimeout( resizeFunction, 100 );
    });

    // menubar:hover
    $('.menubar-menu .hover').on("mouseenter",function(evt){
        // console.log($(this).next());
       $(this).next().addClass("on");
    }).on("mouseleave",function(evt){
        // console.log($(this).next());
        $(this).next().removeClass("on");
    });
});
