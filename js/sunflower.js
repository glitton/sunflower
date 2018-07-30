"use strict";

$(document).ready(function() {
  //birth date
  $(function() {
    $("#datetimepicker1").datetimepicker({
      format: "L"
    });
  });

  // cancer treatment month and year
  $(function() {
    $("#datetimepicker2").datetimepicker({
      viewMode: "years",
      format: "MM/YYYY"
    });
  });

  // Exercise counseling signup form validation
  (function() {
    // "use strict";
    window.addEventListener(
      "load",
      function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener(
            "submit",
            function(event) {
              if (form.checkValidity() === false) {
                alertify.alert(
                  "Sunflower Wellness: Exercise Counseling Sign-up Form",
                  "Please fill out the missing information."
                );
                event.preventDefault();
                event.stopPropagation();
                alert("Please fill out the missing information.");
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();

  // Add btn-chosen class to the current button (highlight it)
  var header = document.getElementById("donate-amounts");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("btn-chosen");
      current[0].className = current[0].className.replace(" btn-chosen", "");
      this.className += " btn-chosen";
    });
  }

  // Show other amounts when clicking on the x icon
  // var close = document.getElementById("close");
  // var hideOther = document.getElementById("other-input-div");
  // var showAmounts = document.getElementById("amount-btns");
  // close.addEventListener("click", function() {
  //   console.log("clicked on close icon");
  //   hideOther.classList.add("hide-other");
  //   showAmounts.classList.add("show-amounts");
  // });
}); //end of document.ready
