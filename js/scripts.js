
$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();

    var question1 = $("input#question1").val();
    var question2 = $("input#question2").val();
    var question3 = $("input#question3").val();
    var question4 = $("input#question4").val();
    var question5 = $("input#question5").val();


    if (question1 === "true") {
      $("#results-Java").show();

    } else if (question2 === "true") {
      $("#results-Ruby").show();

    } else if (question3 === "true") {
      $("#results-C").show();

    } else if (question4 === "true") {
      $("#results-PHP").show();

    } else if (question5 === "true") {
      $("#results-Design").show();
    }

    $("#results-name").text(nameInput);
    event.preventDefault();
  });
});
