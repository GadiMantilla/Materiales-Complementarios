function validateForm() 
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var confirm_password = document.getElementById("confirm-password");
  
	var error = false;
  
	if (name.value === "") {
	  name.classList.add("error");
	  error = true;
	} else {
	  name.classList.remove("error");
	  name.classList.add("valid");
	}
  
	if (email.value === "" || !validateEmail(email.value)) {
	  email.classList.add("error");
	  error = true;
	} else {
	  email.classList.remove("error");
	  email.classList.add("valid");
	}
  
	if (password.value === "" || password.value.length > 8) {
	  password.classList.add("error");
	  error = true;
	} else 
	  password.classList.remove("error");
	  password.classList.add("valid");