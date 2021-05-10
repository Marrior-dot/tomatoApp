var Clock = document.getElementById("minsec");
var SetTiming = document.getElementById("setter");
var stopButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");
var stoppingSound = new Audio("https://www.fesliyanstudios.com/play-mp3/4385");
var Inst = document.getElementById("inst");
//var InstList = document.getElementById("instList");



function clock(){
setLimit = prompt("Por quantos minutos deseja estudar?");
parseInt(setLimit);

var Rep = setInterval(minStudy,1000);
var sec = 0;
	Clock.innerHTML = `<h1>${setLimit}:0${sec}</h1>`
	//Função responsável pelo cronômetro de estudo
	  function minStudy(){ 
		if (sec === 0 && setLimit !== 0){
			setLimit = setLimit - 1;
			sec = 60;
		}
		sec = sec - 1;
		if (sec === 0 && setLimit === 0)
		 {
			sec = 0;
			setLimit = 0;
			stoppingSound.play()
			clearInterval(Rep);
		}
		Clock.innerHTML =`<h1>${setLimit}:${sec}</h1>`;
	}
	//Função do botão Pausar
	stopButton.onclick = function(){
		clearInterval(Rep);
	}
	resetButton.onclick = function(){
		Rep = setInterval(minStudy,1000);	
	}
}
function breakTime(){
setBreak = prompt("Por quanto tempo deseja descansar?");
parseInt(setBreak);

var BRep = setInterval(minBreaks,1000)	
var bsec = 0;
	Clock.innerHTML = `<h1>${setBreak}:0${bsec}</h1>`
	function minBreaks(){
		if (bsec === 0 && setBreak !== 0){
			setBreak = setBreak - 1;
			bsec = 60;
		}	
		bsec = bsec -1;
		if (bsec === 0 && setBreak === 0){
			bsec = 0;
			setBreak = 0;
			stoppingSound.play()
			clearInterval(BRep);
		}

		Clock.innerHTML = `<h1>${setBreak}:${bsec}</h1>`;
	}
	stopButton.onclick = function(){
		clearInterval(BRep);
	}
	resetButton.onclick = function(){
		BRep = setInterval(minBreaks,1000);
	}
}
function showInst(){
	Inst.innerHTML = "<ol class = 'instList'>";
	Inst.innerHTML += "<li>Clique em 'Iniciar' para começar o timer de estudo</li>";
	Inst.innerHTML += "<li>Clique em 'Estudar' para começar o timer de descanso</li>";
	Inst.innerHTML += "<li>Para parar a contagem clique em 'Pausar'";
	Inst.innerHTML += "<li>Para retomar a contagem clique em 'Recomeçar'</ol>";
}
function unshowInst(){
}
