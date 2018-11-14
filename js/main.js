document.addEventListener("DOMContentLoaded", function(e) {
  let totalPrice = 0;
  // On page load, focuses the name input box.
  $(document).ready(function() {
    $("#name").focus();
    $("#payment").val("credit card");
    paymentMsg(null, 0, 1);
    updateActivityPrice();
  });

  // Job Role //
  // When the other drop down option is selected; dynamically create an input box
  // Removes the box if its any other value
  $("#title").change(function() {
    if (
      $(this)
        .val()
        .toLowerCase() == "other"
    ) {
      $(this)
        .parent()
        .append(
          "<input type='text' id='other-title' placeholder='Your Job Role'></input>"
        );
      // $("#other-title").css('display', 'inline-block');
    } else {
      $("#other-title").remove();
    }
  });

  // T-Shirt Info //
  // Displays the propper options under color depending on the option selected under design
  $("#design").change(function() {
    const design = $(this)
      .val()
      .toLowerCase();
    if (design == "select theme") {
      $("#color option").css("display", "");
      $("#color").val("cornflowerblue");
    } else if (design == "js puns") {
      $("#color").val("cornflowerblue");
      hideColor(3, 5);
    } else if (design == "heart js") {
      $("#color").val("tomato");
      hideColor(0, 2);
    }
  });

  // Hides the options under color not relevent to the option selected under design
  function hideColor(start, stop) {
    $("#color option").css("display", "");
    for (i = start; i <= stop; i++) {
      $("#color option")
        .eq(i)
        .css("display", "none");
    }
  }

  // Register for activities //

  $(".activities input").change(e => {
    const targetText = e.target.parentNode.textContent;
    const targetDate = targetText.substr(targetText.length - 22, 12);
    const targetPrice = parseInt(
      targetText.substr(targetText.length - 3, targetText.length),
      10
    );

    if (event.target.checked) {
      totalPrice += targetPrice;
      $(".activities label").each(function() {
        if (
          this.textContent.indexOf(targetDate) != -1 &&
          this.textContent != targetText
        ) {
          $(this).css("text-decoration", "line-through");
          $(this)
            .children()
            .prop("disabled", "true");
        }
      });
    } else {
      totalPrice -= targetPrice;
      $(".activities label").each(function() {
        if (
          this.textContent.indexOf(targetDate) != -1 &&
          this.textContent != targetText
        ) {
          $(this)
            .children()
            .prop("disabled", "");
          $(this).css("text-decoration", "");
        }
      });
    }
    updateActivityPrice();
  });

  function updateActivityPrice() {
    if ($("#activityCost").length) {
      $("#activityCost").text(`Total: ${totalPrice}`);
    } else {
      $(".activities").append(
        '<label id="activityCost">' + "Total: $" + totalPrice + "</label>"
      );
    }
  }

  // Register for activities End //

  // Payment Info //
  $("#payment").change(() => {
    const payment = event.target.value.toLowerCase();

    if (payment == "paypal") {
      paymentMsg(0, 1);
      $("#credit-card").hide();
    } else if (payment == "credit card") {
      paymentMsg(null, 0, 1);
      $("#credit-card").show();
    } else {
      paymentMsg(1, 0);
      $("#credit-card").hide();
    }
  });

  function paymentMsg(a, b, c) {
    $("fieldset p")
      .eq(a)
      .show();
    $("fieldset p")
      .eq(b)
      .hide();
    $("fieldset p")
      .eq(c)
      .hide();
  }

  // Form Validation //
  $("button").submit(() => {
    event.preventDefault();
    // name input box //
    if ($("#name").val() == "") {
      console.log("name input field is emply, please enter your name");
      $("#name").text("Please enter your name");
    }
  });

  $("");
});
