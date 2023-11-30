import React from "react";

const Validate = (data) => {
  const message = {};
  let email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (data.email == "") {
    message.email = "Email Require Please!";
  } else if (!data.email.match(email_pattern)) {
    message.email = "email is not correct!";
  }

  if (data.password == "") {
    message.password = "Password Require Please!";
  } else if (data.password.length > 6) {
    message.password = "password must be greater than 6 digits !";
  }
  return message;
};

export default Validate;
