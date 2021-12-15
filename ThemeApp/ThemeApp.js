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
let i = prompt("Please enter theme: \r\n0: Light theme \r\n1: Dark theme \r\n2: Hacker theme \r\n3: Pink theme \r\n4: RGB theme \r\n5: import theme","0");
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
	let input=prompt("Please enter CSS (not URL):","");
  loadCSS(input);
}