function orbToggle() {
	this.classList.toggle('sun');
	this.classList.toggle('moon');
}

document.querySelector('#orb').addEventListener('click', orbToggle);


function skyToggle() {
	this.classList.toggle('night');
	this.classList.toggle('day');
}

document.querySelector('body').addEventListener('click', skyToggle);


function spotToggle() {
	this.classList.toggle('visible');
	this.classList.toggle('moon');
}
document.querySelector('#moonspot1').addEventListener('click', spotToggle);










// const button = document.querySelector("button");
// const blackBackground = document.querySelector("black");
// const blueBackground = document.querySelector("blue");

// function black() {
// 	document.body.style.backgroundColor = "black";
// };

// function black() {
// 	document.querySelector = "black";
// }

// function blue() {
// 	document.querySelector = "blue";
// };

// function toggle() {
// 	const current = document.body.style.backgroundColor;
// 	if (current === "white") {
// 		document.querySelector = "black";
// 	} else {
// 		document.querySelector = "white";
// 	}

// };

// button.addEventListener("click", black);
// button.addEventListener("click", blue);
// button.addEventListener("click", toggle);






// function backgroundToggle() {
// 	this.classList.toggle("day");
// 	this.classList.toggle("night");
// }
// document.querySelector("#main").addEventListener("click", backgroundToggle);












