$(document).ready(function () {
  $("#formValidation").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 10
      },
      subject: {
        required: true
      },
      formMessage: { // Updated field name to match your HTML
        required: true
      }
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Name must be at least 2 characters"
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      phone: {
        required: "Please enter your phone number",
        minlength: "Phone number must be at least 10 digits"
      },
      subject: {
        required: "Please enter a subject"
      },
      formMessage: { // Updated field name to match your HTML
        required: "Please enter a message"
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});

  