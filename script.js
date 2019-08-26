function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;

  if (name == "") {
    document.getElementById("userName").innerHTML = "Please enter your name!";
  } else if (name != "") {
    document.getElementById("userName").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("userEmail").innerHTML = "Please enter your email!";
  } else if (email != "") {
    document.getElementById("userEmail").innerHTML = "";
  }

  if (password.length < 8) {
    document.getElementById("userPw").innerHTML =
      "Password should be at least 8 characters";
  } else if (password.length >= 8) {
    document.getElementById("userPw").innerHTML = "";
  }

  if (password !== password2) {
    document.getElementById("userPw2").innerHTML = "Passwords don't match!!";
  } else {
    document.getElementById("userPw2").innerHTML = "";
  }
}
