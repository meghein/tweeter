$(document).ready(function(){
  $("textarea").on("input", function () {
    let counter = 140 - $(this).val().length
    //append counter to subtract from 140
    $("output.counter", $(this).parents("form")).text(counter)
    
    //disable click if counter < 0
    // if else statement, find button, add or remove disabled from it

    //change CSS to turn counter to red when in the negative.
    if (counter < 0) {
      $("output.counter", $(this).parents("form")).addClass("error");
      // $("button", $(this).parents("form")).prop("disabled", true);
    } else {
      $("output.counter", $(this).parents("form")).removeClass("error")
      // $("button", $(this).parents("form")).prop("disabled", false);
    }

  });
});


// if ($("#InputBoxID").val() < 100) {
//   $("#FormId").submit();
// }
// else {
//   alert("your message");
// }
