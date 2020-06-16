$(document).ready(function () {
  $("article").hover(function(){
    $(this).addClass("shadow");
    $(this).find("h5").show();
    }, function(){
    $(this).removeClass("shadow");
    $(this).find("h5").hide();
  });
});