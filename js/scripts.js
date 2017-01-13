//business logic:


//user interface logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();

    var question1 = $("input#question1").val();
    var question2 = $("input#question2").val();
    var question3 = $("input#question3").val();


    if (question1 === "true") {
      $("#results-Java").show();
    } else if (question2 === "true") {
      $("#results-Ruby").show();
    } else if (question3 === "true") {
      $("#results-C").show();
    }

    //
    // if (question2==="true") {
    //   $("results-Ruby").show();
    // } else {
    //   $("results-Ruby").hide();
    // }
    //
    //
    // if (question3==="true") {
    //   $("results-C").show();
    // } else {
    //   $("results-C").hide();
    // }

    $("#results-name").text(nameInput);
    event.preventDefault();
  });
});
