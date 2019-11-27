$(function() {
    $(".devour-button").on("click", function(event) {
      var id = $(this).data("id");
    //   var newNom = $(this).data("devour");
  

      var newEats = {
        devour: 1
      };
  

      $.ajax("/api/burgs/" + id, {
        type: "PUT",
        data: newEats
      }).then(
        function() {
          console.log("changed devour to devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#addBurger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurg = {
        burgname: $("#burgerName").val(),
        devour: 0
      };
    //   $("[burgname=devour]:checked").val(0)
  
      // Send the POST request.
      $.ajax("/api/burgs/", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burg");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});