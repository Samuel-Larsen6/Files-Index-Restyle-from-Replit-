function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setTheme() {
	let i = prompt("Please enter theme: \r\n0: Light theme \r\n1: Dark theme \r\n2: Hacker theme \r\n3: Pink theme \r\n4: RGB theme \r\n5: import theme","0");
	document.cookie = "theme="+i;
	location.reload()
}
function dark() {
  var theme=document.createElement("STYLE");
	theme.innerText="@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');html {background: black; color: white;font-family: 'Open Sans', sans-serif;}a:link {  color: #3F3FFF;  background-color: transparent;  text-decoration: none;}a:visited {  color: #7F00FF;  background-color: transparent;  text-decoration: none;}a:hover {  color: #5F5FFF;  background-color: transparent;  text-decoration: underline;}a:active {  color: #0000FF;  background-color: transparent;  text-decoration: underline;}";
	document.head.appendChild(theme);
}
function hacker() {
  var theme=document.createElement("STYLE");
	theme.innerText="@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');html {background: black; color: #00FF00;font-family: 'Roboto Mono', monospace;}a:link {  color: #3F3FFF;  background-color: transparent;  text-decoration: none;}a:visited {  color: #7F00FF;  background-color: transparent;  text-decoration: none;}a:hover {  color: #5F5FFF;  background-color: transparent;  text-decoration: underline;}a:active {  color: #0000FF;  background-color: transparent;  text-decoration: underline;}";
	document.head.appendChild(theme);
}
function light() {
  var theme=document.createElement("STYLE");
	theme.innerText="@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); html { font-family: 'Open Sans', sans-serif; }";
	document.head.appendChild(theme);
}
function pink() {
  var theme=document.createElement("STYLE");
	theme.innerText="@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');html {background: pink; color: black;font-family: 'Open Sans', sans-serif;}";
	document.head.appendChild(theme);
}
function rGB() {
  var theme=document.createElement("STYLE");
	theme.innerText="@keyframes animation { 0% {background-color: #FF0000;} 16.66% {background-color: #FFFF00;} 33.33% {background-color: #00FF00;} 50% {background-color: #00FFFF;} 66.66% {background-color: #0000FF;} 83.33% {background-color: #FF00FF;} 100% {background-color: #FF0000;} } @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); html { color: black; font-family: 'Open Sans', sans-serif; animation: animation 10s infinite; } a:link { color: #3F3FFF; background-color: transparent; text-decoration: none; } a:visited { color: #7F00FF; background-color: transparent; text-decoration: none; } a:hover { color: #5F5FFF; background-color: transparent; text-decoration: underline; } a:active { color: #0000FF; background-color: transparent; text-decoration: underline; }";
	document.head.appendChild(theme);
}
function loadCSS(cSS) {
  var theme=document.createElement("STYLE");
	theme.innerText=cSS;
	document.head.appendChild(theme);
}
let i = getCookie("theme");
if (i === "") {
	setTheme();
}
if (i === "0") {
  light();
}
if (i === "1") {
  dark();
}
if (i === "2") {
  hacker();
}
if (i === "3") {
  pink();
}
if (i === "4") {
  rGB();
}
if (i === "5") {
	let input=getCookie("CSS");
	if (input==="") {
		input=prompt("Please enter URL to CSS:","");
		document.cookie = "CSS="+input;
	}
  loadCSS("@import url('"+input+"');");
}
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}
window.onload = function() {
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var button3 = document.getElementById("button3");
	button1.onclick = function() {
		setTheme()
	}
	button2.onclick = function() {
		input=prompt("Please enter URL to CSS:","");
		document.cookie = "CSS="+input;
		loadCSS(input);
	}
	button3.onclick = function() {
		for (x=1;x<document.getElementsByClassName("dev").length;x++) {
			document.getElementsByClassName("dev")[x].setAttribute("style","display:contents;");
		}
		setCookie("devMode","1");
	}
	if (getCookie("devMode")) {
		button3.removeAttribute("disabled");
	}
}