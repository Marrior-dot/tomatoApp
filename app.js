var Clock = document.getElementById("minsec");
var SetTiming = document.getElementById("setter");
var stopButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");
var stoppingSound = new Audio("https://www.fesliyanstudios.com/play-mp3/4385");
var divList = document.getElementById("instructList");
var divCont = document.getElementById("contactList");


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
	divList.style.display = 'flex';
	divList.innerHTML = "<ol>";
	divList.innerHTML += "<li>Clique em 'Iniciar' para começar o timer de estudo</li>";
	divList.innerHTML += "<li>Clique em 'Intervalo' para começar o timer de descanso</li>";
	divList.innerHTML += "<li>Para parar a contagem clique em 'Pausar'</li>";
	divList.innerHTML += "<li>Para retomar a contagem clique em 'Recomeçar'</li></ol>";
}
function unshowInst(){
	divList.style.display = 'none'
}
function showContact(){
	var links = ["https://www.instagram.com/mari0_2000/","https://api.whatsapp.com/send?phone=5591988685722&text=Ol%C3%A1!%20quero%20fazer%20meu%20or%C3%A7amento","https://github.com/Marrior-dot'><i class='fab fa-github"];
	divCont.style.display = 'flex';
	divCont.innerHTML = `<a  href=${links[0]} target="_blank" ><i class="fab fa-instagram"></i></a>`
	divCont.innerHTML += `<a target ="_blank" href = ${links[1]}><i class = 'fab fa-whatsapp'></i></a>`
	divCont.innerHTML += "<a target ='blank' href = 'https://github.com/Marrior-dot'><i class='fab fa-github'></i></a>"
}
function unshowContact(){
	divCont.style.display = 'none';
}

