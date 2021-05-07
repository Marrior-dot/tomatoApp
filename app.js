var Clock = document.getElementById("minsec");
var SetTiming = document.getElementById("setter");

SetTiming.onclick = function(setLimit = 25){
setLimit = prompt("Por quanto tempo deseja estudar?");
parseInt(setLimit);

var sec = 60;
		sec = sec - 1;
		if (sec === 0 ){
			setLimit = setLimit - 1;
			sec = 60;
		}
		console.log(`${setLimit} : ${sec}`)
		Clock.innerHTML = `<h1> ${setLimit} : ${sec} </h1>`;
	}

