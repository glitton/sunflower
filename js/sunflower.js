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

  // Exercise Counseling Signup Complete Acknowledgement
  document
    .getElementById("choose-btn")
    .addEventListener("click", signUpComplete);

  function signUpComplete() {
    var signupDone = document.getElementById("done");
    signupDone.style.display = "block";
  }

  // Exercise counseling close, hides signup display
  document.getElementById("close-btn").addEventListener("click", closeResetDiv);

  function closeResetDiv() {
    var signupReset = document.getElementById("done");
    signupReset.style.display = "none";
  }
}); //end of document.ready
