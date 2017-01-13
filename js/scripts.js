//business logic:







//user interface logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();
    var question1 = $("input:radio[name=question-1]:checked").val();
    var question2 = $("input:radio[name=question-2]:checked").val();
    var question3 = $("input:radio[name=question-3]:checked").val();
    var question4 = $("input:radio[name=question-4]:checked").val();
    var question5 = $("input:radio[name=question-5]:checked").val();




    $("#results-name").text(nameInput);
    $("#results").show();

    event.preventDefault();
  });
});
