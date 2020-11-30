//------------------------General Functions--------------------------------------

function setCookie(cookiename, cookievalue, expirydays) {
  var d = new Date();
  d.setTime(d.getTime() + (expirydays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
}

function getCookie(cookiename) {
  var name = cookiename + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
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

//------------------Cookie Checking For Order Confirmation-----

function gatherCookies(){
	var name = document.getElementById("name");
	var address = document.getElementById("address");
	var phone = document.getElementById("phone");
	var cc = document.getElementById("ccardnum");
	var cname = getCookie("name");
	var caddress = getCookie("address");
	var cphone = getCookie("phone");
	var ccc = getCookie("creditcard");
	
	name.innerHTML = cname;
	address.innerHTML = caddress;
	phone.innerHTML = cphone;
	var ccsub = ccc.substring(0,cc.value.length-2)
	ccc = "****-****-****-**"+ccsub;
	cc.innerHTML = ccc;
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
	setCookie("name", box.value.innerHTML, 1)
	setCookie("address", box2.value.innerHTML, 1)
	setCookie("phone", box3.value.innerHTML, 1)
	setCookie("creditcard", box4.value.innerHTML, 1)
}

/* Comment by Shaira : I did a simple Form Validation on the Order Form and Contacts page.
 It isn't perfect. Feel free to tweak it.
 Or we can just make it work on the video report
 */

/*
TODO:
PHP
Cookies
SQL
VBScript
ASP
Web Server Security Issues
Authentication
*/

    

