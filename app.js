var Clock = document.getElementById("minsec");
var SetTiming = document.getElementById("setter");


function clock(setLimit = 25) {
setLimit = prompt("Por quanto tempo deseja estudar?");
parseInt(setLimit);


var Rep = setInterval(minandsecs,1000);
var sec = 60;
	function minandsecs(){ 
		sec = sec - 1;
		if (sec === 0 ){
			setLimit = setLimit - 1;
			sec = 60;
		}
		Clock.innerHTML = `<h1> ${setLimit} : ${sec} </h1>`;
	}
}
