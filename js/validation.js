let validationMessage = "";

const Validation = {
  name: function validateName(name) {
    if ($("#name").val() == "") {
      return false;
    } else {
      $("#name").css("border-color", "");
    }
  },
  email: function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  activities: function validateActivities() {
    // do something
  }
};
