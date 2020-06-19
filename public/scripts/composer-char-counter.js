$(document).ready(function(){
  $("textarea").on("input", function () {
    let counter = 140 - $(this).val().length
    //append counter to subtract from 140
    $("output.counter", $(this).parents("form")).text(counter)
    
    //change CSS to turn counter to red when in the negative.
    if (counter < 0) {
      $("output.counter", $(this).parents("form")).addClass("error");
    } else {
      $("output.counter", $(this).parents("form")).removeClass("error")
    }
  });
});
