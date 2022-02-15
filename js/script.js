$(function(){
    $(".toggle").click(function(){
        $(".nav").slideToggle()
    });

    $(window).resize(function(){
        let winW = window.innerWidth;
        if(winW > 768){
            $(".nav").css("display","flex");
            $(".nav>li>a").click(function(){
                $(".nav").css("display","block");
            });
            $(".logo>a").click(function(){
                $(".nav").css("display","block");
            });
        }else{
            $(".nav").css("display","none");
            $(".nav>li>a").click(function(){
                $(".nav").css("display","none");
            });
            $(".logo>a").click(function(){
                $(".nav").css("display","none");
            });
        }
    });
    $(window).trigger("resize");
});
