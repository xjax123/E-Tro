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

     if (box.value.length < 10 || box2.value.length < 10 || box3.value.length < 10 || box4.value.length < 16)   {
        alert ("Please enter in all fields correctly");
        box.focus() ; box2.focus(); box3.focus(); box4.focus();
        box.style.border = "solid 3px red"; box2.style.border = "solid 3px red";
        box3.style.border = "solid 3px red"; box4.style.border = "solid 3px red";
        return false;
       
        }
   
}

// Comment by Shaira : I did a simple Form Validation on the Order Form and Contacts page.
// It isn't perfect. Feel free to tweak it.
// Or we can just make it work on the video report 

    

