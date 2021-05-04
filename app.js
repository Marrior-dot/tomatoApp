var Bstart =document.getElementById("start");
var Clock = document.getElementById("clock");
let SetTiming = document.getElementById("setter");

SetTiming.onclick = function(){
var setLimit = prompt("Por quanto tempo deseja estudar?");
parseInt(setLimit);
return setLimit;


}
	Bstart.onclick = setInterval(timers.start,1000);


var sec = 60;
var timers = {
	start(){
		
		sec = sec - 1;
		if (sec === 0 ){
			timeLimit = it - 1;
			sec = 60;
		}	
		Clock.innerHTML = `<h1> ${timeLimit} : ${sec} </h1>`;
	}
	//pause(){}
	//break(){}
}


