var theme=document.createElement("STYLE");
theme.innerText="@keyframes animation { 0% {background-color: #FF0000;} 16.66% {background-color: #FFFF00;} 33.33% {background-color: #00FF00;} 50% {background-color: #00FFFF;} 66.66% {background-color: #0000FF;} 83.33% {background-color: #FF00FF;} 100% {background-color: #FF0000;} } @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); html { color: black; font-family: 'Open Sans', sans-serif; animation: animation 10s infinite; } a:link { color: #3F3FFF; background-color: transparent; text-decoration: none; } a:visited { color: #7F00FF; background-color: transparent; text-decoration: none; } a:hover { color: #5F5FFF; background-color: transparent; text-decoration: underline; } a:active { color: #0000FF; background-color: transparent; text-decoration: underline; }";
document.head.appendChild(theme);