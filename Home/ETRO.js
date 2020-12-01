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

 if (box.value.length < 5 || box2.value.length < 5 || box3.value.length < 5)   {
 alert ("Please enter at least 5 characters in all fields");
 box.focus() ; box2.focus(); box3.focus();
 box.style.border = "solid 3px red"; box2.style.border = "solid 3px red";
 box3.style.border = "solid 3px red";
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
	if (box4.value.length == 17 ) {
		box4.focus();
		box4.style.border = "solid 3px red";
		error = true;
	}
	
	//return an error
	if (error == true) {
		alert(box4.value.length);
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

/* Comment by Shaira : I did a simple Form Validation on the Order Form and Contacts page.
 It isn't perfect. Feel free to tweak it.
 Or we can just make it work on the video report
 */

/*
TODO:
PHP (Looks Functional)
Cookies (They look Functional)
SQL (Looks Functional)
VBScript 
ASP
Web Server Security Issues 
Authentication
*/

    

