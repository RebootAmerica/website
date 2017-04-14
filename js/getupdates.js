// Update Notification Form Scripts

									
function notifySignup(thatForm) {
	var xhttp = new XMLHttpRequest();
	var email = encodeURIComponent(document.getElementById(thatForm + 'email').value);
	var subject = encodeURIComponent(document.getElementById(thatForm + 'subject').value);
	var format = encodeURIComponent(document.getElementById(thatForm + 'fmt').value);
	var spam = encodeURIComponent(document.getElementById(thatForm + 'spam').value);
	var datafoo = email + "&" + subject + "&" + format;
	if (spam) {datafoo = datafoo + "&" + spam};
	xhttp.open("POST", "https://formspree.io/hello@rebootsafety.tech", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(datafoo);
		
	document.getElementById(thatForm + 'email').value = "";
	alert("You've been added to updates!");
	
}
									