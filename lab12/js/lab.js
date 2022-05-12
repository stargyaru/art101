/*Author: Tamara Basbuyuk
*Created: 05.01.2022
*License: Public Domain
*
*/
//react.js
<script
			  src="https://code.jquery.com/jquery-3.6.0.min.js"
			  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
			  crossorigin="anonymous"></script>



var outputEI = document.getElementById("output");
var new1EI = document.createElement("p");
var new2EI = document.createElement("h2");
console.log(outputEI);
new1EI.innerHTML ="hello";
outputEI.appendChild(new1EI);
outputEI.appendChild(new2EI);



//modifying the css through DOM elements (slide 28)
outputEI.style.color = "blue";

document.getElementById("lab9summary").style.marginLeft = "50px";

document.getElementById("lab9summary").style.position = "absolute";
