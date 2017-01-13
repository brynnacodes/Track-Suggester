//business logic:


//user interface logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();



    $("#results-name").text(nameInput);
    event.preventDefault();
  });
});
