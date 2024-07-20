
let cancion = document.getElementById('cancion');
let clickSound = document.getElementById('clickSound');
let imgStatic = document.getElementById('santaStatic');

/*!- función para obtener el tiempo fltante para navidad de 2024(25/12/2024)*/
function obtenerTiempoFaltante(fechaLimite) {
    const timeNow = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - timeNow + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-3);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante
    };
}

// funcion para mostrar el tiempo faltante en el html
function cuentaRegresiva(fechaLimite) {
    const dias = document.getElementById('dias');
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
    const mensajito = document.getElementById('mensaje');
    const mensaje = '¡Feliz Navidad!';
    
    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(fechaLimite);
        
        if (t.tiempoFaltante <= 0) {
            clearInterval(tiempoActual);
            mensajito.innerHTML = mensaje;
            santaBailando();
            activarBotones();
            t = {
                segundosFaltantes: '00',
                minutosFaltantes: '00',
                horasFaltantes: '00',
                diasFaltantes: '00',
                tiempoFaltante: 0
            };
        }

        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`;
        minutos.innerHTML = `${t.minutosFaltantes}`;
        segundos.innerHTML = `${t.segundosFaltantes}`;
    }, 1000);
}

cuentaRegresiva('DEC 25 2024 14:00:00 GMT-0500');

function santaBailando() {
    imgStatic.src = "../img/papaNoel.gif";
}

// función para que la musica suene cuando se clickeen el boton play y se pause cuando se clickee el boton pause. tambien para que al hacer click suene el clicksound
function activarBotones() {
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');

    playButton.addEventListener('click', () => {
        if (!playButton.classList.contains('selected')) {
            clickSound.play();
            cancion.play();
            playButton.classList.add('selected');
            pauseButton.classList.remove('selected');
        }
    });

    pauseButton.addEventListener('click', () => {
        if (!pauseButton.classList.contains('selected')) {
            clickSound.play();
            cancion.pause();
            pauseButton.classList.add('selected');
            playButton.classList.remove('selected');
        }
    });
}

