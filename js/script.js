$(function(){
  $(".nav>li>a").click(function(){
    $('.nav').css("display","none");
  })

  $(".toggle").click(function(){
      $(".nav").slideToggle()
      $(".change").css("display","block");
      $(".one").css("display","none");
  });

  $(".change").click(function(){
      $(".one").css("display","block");
      $(".change").css("display","none");
  });
});
