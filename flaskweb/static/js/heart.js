// It checks to see if the span id #heart has "liked" class, if not it run the else statement and adds the "liked" class, on a 2nd click it see that it has the "liked" class so it replaces the ihherHTML and removes class, on 3rd click it runs the else statement again cause there is no "liked" class(remomved on 2nd click).

$(document).ready(function(){
  $(".heart").click(function(){
    if($(this).hasClass("liked")){
      $(this).html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
      $(this).removeClass("liked");
    }else{
      $(this).html('<i class="fa fa-heart" aria-hidden="true"></i>');
      $(this).addClass("liked");
    }
  });
});