$(document).ready( function(){
    $(".header").height($(window).height()) // подгоняет под ширину экрана
 
  })

// добавим скролл
$(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top // для того чтобы крутилась анимация
    },1000)
    
   })