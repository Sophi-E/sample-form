var name = document.form1.name.value;
var email = document.form1.email.value;
var password = document.form1.password.value;
var password2 = document.form1.password2.value;

function validate() {
  if (name == null || name == "") {
    alert("Please provide your name");
    return false;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
  return true;
}
