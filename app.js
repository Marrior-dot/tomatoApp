var Clock = document.getElementById("minsec");
var SetTiming = document.getElementById("setter");
var bipping = new Audio("https://www.youtube.com/watch?v=KgLg5vE8WHI&ab_channel=DownloadTube");


function clock(){
setLimit = prompt("Por quantos minutos deseja estudar?");
parseInt(setLimit);

var Rep = setInterval(minStudy,1000);
var sec = 0;
	Clock.innerHTML = `<h1>${setLimit}:0${sec}</h1>`
	function minStudy(){ 
		if (sec === 0 && setLimit !== 0){
			setLimit = setLimit - 1;
			sec = 60;
		}
		 sec = sec - 1;
                 Clock.innerHTML =`<h1>${setLimit}:${sec}</h1>`;
		if (sec === 0 && setLimit === 0 ){
			sec = 0;
			setLimit = 0;
			bipping.play();
		}
//		sec = sec - 1;
//		Clock.innerHTML =`<h1>${setLimit}:${sec}</h1>`;
	}
}
function breakTime(){
setBreak = prompt("Por quanto tempo deseja descansar?");
parseInt(setBreak);

var BRep = setInterval(minBreaks,1000)	
var bsec = 0;
	Clock.innerHTML = `<h1>${setBreak}:0${bsec}</h1>`
	function minBreaks(){
		if (bsec === 0){
			setBreak = setBreak - 1;
			bsec = 60;
		}	
		bsec = bsec - 1;
		Clock.innerHTML = `<h1>${setBreak}:${bsec}</h1>`;
	}
}
