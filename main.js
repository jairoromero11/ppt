var btnPiedra = document.getElementById('btnPiedra');
var btnPapel = document.getElementById('btnPapel');
var btnTijera = document.getElementById('btnTijera');

//variables label
var lblUser = document.getElementById('lblUser');
var lblCpu = document.getElementById('lblCpu');
var lblWin = document.getElementById('lblWin');
var lblResUser = document.getElementById('lblResUser');
var lblResCpu = document.getElementById('lblResCpu');


//arreglo
var opciones = ["Piedra", "Papel", "Tijera"];

var puntajeUser = 0;
var puntajeCpu = 0;

btnPiedra.addEventListener('click', function() {
    startGame(btnPiedra.value)
});
btnPapel.addEventListener('click', function() {
    startGame(btnPapel.value)
});
btnTijera.addEventListener('click', function() {
    startGame(btnTijera.value)
});


function startGame(value) {
    //value es la seleccion del usuer
    let userSelection = value;
    let cpuSelection = getCpuResponse();
    let resultado = checkWinner(userSelection, cpuSelection);

    if (resultado == "Ganaste") {
        //sumar un punto al usuario
        puntajeUser++;
    } else if (resultado == "Perdiste") {
        puntajeCpu++;
    }

    lblUser.innerHTML = opciones[userSelection];
    lblCpu.innerHTML = opciones[cpuSelection];
    lblWin.innerHTML = resultado;
    lblResUser.innerHTML = puntajeUser;
    lblResCpu.innerHTML = puntajeCpu;
}
//va a comparar la seleccion  del usuario y la cpuSelection

function checkWinner(userSelection, cpuSelection) {
    /*
        Piedra (0) > Tijera (2)
        Tijera (2) > Papel (1)
        Papel (1) > Tijera (2)
    */
    let respuesta;
    if ((userSelection == 0 && cpuSelection == 2) || (userSelection == 2 && cpuSelection == 1) || (userSelection == 1 && cpuSelection == 0)) {
        respuesta = "Ganaste"
    } else if (userSelection == cpuSelection) {
        respuesta = "Empate"
    } else {
        respuesta = "Perdiste"
    }

    return respuesta;
}

//retorna la seleccion de la maquina
function getCpuResponse() {
    let x = Math.floor(Math.random() * 3)
    if (x == 3) {
        return 2;
    }
    return x;
}