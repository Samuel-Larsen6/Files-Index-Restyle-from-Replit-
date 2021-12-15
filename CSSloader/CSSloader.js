let i = prompt("Import mode: \r\n1: CSS code \r\n2: URL","0");
var theme=document.createElement("STYLE");
if (i === "1") {
  let cSS=prompt("Please enter CSS:","");
	theme.innerText=cSS;
}
if (i === "2") {
  let uRL=prompt("Please enter URL:","");
	theme.innerText="@import url('"+uRL+"');";
}
document.head.appendChild(theme);