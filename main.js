function validate() {
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	if(email.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
		console.log("NOT Validated");
		return false;
	}
	else {
		console.log("Validated");
		return true;
	}
}