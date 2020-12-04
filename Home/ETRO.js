//------------------------General Functions--------------------------------------

function setCookie(cookiename, cookievalue) {
	sessionStorage.setItem(cookiename, cookievalue)
}

function getCookie(cookiename) {
	return sessionStorage(cookiename);
}

//-------------------------Form Validation for Email sent-------------------------

function validateTextbox()  {

	var box = document.getElementById("name"); 
	var box2 = document.getElementById("email");
	var box3 = document.getElementById("message");
	var error = false;
	box.style.border = "none";
	box2.style.border = "none";
	box3.style.border = "none";

	if (box.value.length < 2) {
		box.focus();
		box.style.border = "solid 3px red";
		error = true;
	}
	
	if (box2.value.length < 2 && box2.innerHTML.includes("@") && box2.innerHTML.includes(".")) {
		box2.focus();
		box2.style.border = "solid 3px red";
		error = true;
	}
	
	if (box3.value.length < 2) {
		box3.focus();
		box3.style.border = "solid 3px red";
		error = true;
	}
	
	if (error == true) {
		alert("Please correct the form before you continue");
		return false;
	}
}


//==================Form Validation on Order form===============

function validateOrder()  {
    var box = document.getElementById("name2"); 
    var box2 = document.getElementById("address");
    var box3 = document.getElementById("phone");
    var box4 = document.getElementById("credit card");
    var error = false;
    box.style.border = "none";
    box2.style.border = "none";
    box3.style.border = "none";
    box4.style.border = "none";
	
	//Validate Box1
	if (box.value.length < 2) {
		box.focus();
		box.style.border = "solid 3px red";
		error = true;
	}
	
	//Validate Box2
	if (box2.value.length < 2) {
		box2.focus();
		box2.style.border = "solid 3px red";
		error = true;
	}
	
	//Validate Box3
	if (box3.value.length < 2) {
		box3.focus();
		box3.style.border = "solid 3px red";
		error = true;
	}
	
	//Validate Box4
	if (box4.value.length < 16 ) {
		box4.focus();
		box4.style.border = "solid 3px red";
		error = true;
	}
	
	//return an error
	if (error == true) {
		alert("Please correct the form before you continue");
		return false;
	}

	//Set Cookies
	setCookie("name", box.value.innerHTML)
	setCookie("address", box2.value.innerHTML)
	setCookie("phone", box3.value.innerHTML)
	setCookie("creditcard", box4.value.innerHTML)
}

//================Product Page===========================

function saveItem(item) {
	var url = item.src;
	url = url.replaceAll(".jpg", "");
	setCookie("device", url);
}

/* ===========================Cookie pop up============================*/

const storageType = sessionStorage;
const consentPropertyName = 'etro_consent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, 1);

window.onload = () => {
	if (shouldShowPopup ()) {
		const consent = confirm('This site uses cookies. Agree to terms and conditions.');
		if (consent) {
			saveToStorage ();
		}
		
	}
};

/*============================================================================*/

/* Comment by Shaira : Added a Cookies pop-up. Should show up when user enters the site. 
		       Credit card text box wasn't validating on the Order form, so I tweaked that to just the enter a 16-digit number condition.
		       Text boxes in Email form <Contacts.html> weren't validating.
		       		Red borders were not showing up and or/ disappearing when correctly filled in. 
				Tweaked it so, if you fill in the email text box first. Should work.
		       		
		       		
 */

/*
TODO:
XHTML/JS (Obviously Working)
PHP (Looks Functional)
Cookies (Looks Functional)
SQL (Looks Functional)
VBScript (Can probably BS about)
Form/Form Validation (Working)
Web Server Security Issues (?)
Authentication (I guess?)
*/

    

