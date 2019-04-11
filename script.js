console.log("I was loaded")

let startButton = document.getElementById("startButton");
let interButton = document.getElementById("intUnits");
let engButton = document.getElementById("engUnits");

function transitionWelcome() {
	let welcome = document.getElementById("welcome").className = "hidden";
	setTimeout(
		function(){ 
			let metricMenu = document.getElementById('metricUnits').className = "visible"; 
		}, 500);	
}

function transitionInternational() {
	let metricMenu = document.getElementById("metricUnits").className = "hidden";
	setTimeout(
		function(){ 
			let intMenu= document.getElementById('intSystem').className = "visible"; 
		}, 500);	
}

function transitionEnglish() {
	let metricMenu = document.getElementById("metricUnits").className = "hidden";
	setTimeout(
		function(){ 
			let intMenu = document.getElementById('intSystem').className = "visible"; 
		}, 500);	
}


startButton.addEventListener("click", transitionWelcome);
interButton.addEventListener("click", transitionInternational);
engButton.addEventListener("click", transitionEnglish)