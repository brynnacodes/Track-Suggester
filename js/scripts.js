
$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();

    if (question1 === "true") {
      $("#results-Java").fadeToggle();

    } else if (question2 === "true") {
      $("#results-Ruby").fadeToggle();

    } else if (question3 === "true") {
      $("#results-C").fadeToggle();

    } else if (question4 === "true") {
      $("#results-PHP").fadeToggle();

    } else if (question5 === "true") {
      $("#results-Design").fadeToggle();
    }

    $("#results-name").text(nameInput);
    event.preventDefault();
  });
});
