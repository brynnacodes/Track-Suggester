
$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();

    if (question1 === "true") {

      $("#results-Ruby").hide();
      $("#results-C").hide();
      $("#results-PHP").hide();
      $("#results-Design").hide();
      $("#results-Java").show();

    } else if (question2 === "true") {

      $("#results-Java").hide();
      $("#results-C").hide();
      $("#results-PHP").hide();
      $("#results-Design").hide();
      $("#results-Ruby").show();

    } else if (question3 === "true") {

      $("#results-Java").hide();
      $("#results-Ruby").hide();
      $("#results-PHP").hide();
      $("#results-Design").hide();
      $("#results-C").show();

    } else if (question4 === "true") {

      $("#results-C").hide();
      $("#results-Java").hide();
      $("#results-Ruby").hide();
      $("#results-Design").hide();
      $("#results-PHP").show();

    } else if (question5 === "true") {

      $("#results-Java").hide();
      $("#results-Ruby").hide();
      $("#results-C").hide();
      $("#results-PHP").hide();
      $("#results-Design").show();

    }

    $(".results-name").text(nameInput);
    event.preventDefault();
  });
});
