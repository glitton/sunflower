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
}); //end of document.ready
