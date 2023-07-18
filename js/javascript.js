
/*var mytopnav = document.getElementByID('myTopnav')[0];
window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 300) {
                // green
                mytopnav.style.backgroundColor = '8000Ff';
            }  else {
                // purple
               mytopnav.style.backgroundColor = '#333';
            }
        }
*/

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";

}

function closeNav() {
	document.getElementById("myTopnav").style.width = "100%";
  document.getElementById("mySidenav").style.width = "0";
   document.getElementById("open").style.display = "block";
}
function home(){
	document.getElementById("home").style.display="block";
	document.getElementById("about").style.display="none";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="none";
	document.getElementById("contact").style.display="none";
}
function about(){
	document.getElementById("home").style.display="none";
	document.getElementById("about").style.display="block";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="none";
	document.getElementById("contact").style.display="none";
}
function cert(){
	document.getElementById("home").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="block";
	document.getElementById("contact").style.display="none";
}
function exp(){
	document.getElementById("home").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("exp").style.display="block";
	document.getElementById("cert").style.display="none";
	document.getElementById("contact").style.display="none";
}

function transfer(){
	document.getElementById("home").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="none";
	document.getElementById("contact").style.display="block";
}
function contact(){
	document.getElementById("home").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("exp").style.display="none";
	document.getElementById("cert").style.display="none";
	document.getElementById("contact").style.display="block";
}


function fb() {
  window.open("https://www.facebook.com/mavilleoprado/");
}
function scs(){
	window.open("https://drive.google.com/file/d/19f88dR6TWiSzAIyBiFEze_5Pu9SflfVV/view?usp=sharing");
}
function scn(){
	window.open("https://drive.google.com/file/d/1MyUnyQ93YUD6Y-ofjkzN3C5UOuZIKCfr/view?usp=sharing");
}
function mcsn(){
	window.open("https://drive.google.com/file/d/1AvJ3soJRE1uhQZEL7NHFLLzDOC4rItvG/view?usp=sharing");
}
function icss(){
	window.open("https://drive.google.com/file/d/1iymUmqKbAYtKkTQ4_BW52Q1E3nEZcDSa/view?usp=sharing");
}
function introcss(){
	window.open("https://drive.google.com/file/d/1x2s_6KOj9VTEK4DXhJKCmrUMq8KlHAwy/view?usp=sharing");
}
function electrical(){
	window.open("https://drive.google.com/file/d/1JEAArmtLRrrM11pVSjjfHPSRlnuhspfi/view?usp=sharing");
}
function solar(){
	window.open("https://drive.google.com/file/d/1vLCKG6Bi4LAXJWQileAKYnn56QTc1JaI/view?usp=sharing");
}
function sql(){
	window.open("https://drive.google.com/file/d/1_oblWWIzrvnkqCjra29chB2aFdlc23tD/view?usp=sharing");
}
function aad(){
	window.open("https://drive.google.com/file/d/1IV3wQGpRDYx5UsNCesdJGi71T-l3HaYR/view?usp=sharing");
}
function html(){
	window.open("https://drive.google.com/file/d/1jLUWZLuAAvWn4ufxWwlFBlrOZI8swtwL/view?usp=sharing");
}
function java(){
	window.open("https://drive.google.com/file/d/1DCLFMh6fDN0Yw3DO7O5Qydicf-rmK6Ea/view?usp=sharing");
}
