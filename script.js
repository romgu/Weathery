console.log("I was loaded")

function transitionWelcome() {
	let welcome = document.getElementById("welcome").className = "hidden";
	setTimeout(
		function(){ 
			let metricMenu = document.getElementById('metricUnits').className = "visible"; 
		}, 500);	
}


let startButton = document.getElementById("startButton");
startButton.addEventListener("click", transitionWelcome)