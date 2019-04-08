console.log("I was loaded")

function transitionWelcome() {
	let welcome = document.getElementById("welcome").className = "hidden";
	let metricMenu = document.getElementById('metricUnits').className = "visible";
}


let startButton = document.getElementById("startButton");
startButton.addEventListener("click", transitionWelcome)