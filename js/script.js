//  variables inicializadas para ser utilizadas en funciones

let cancion = document.getElementById('cancion')
let clickSound = document.getElementById('clickSound')
let imgStatic = document.getElementById('santaStatic')

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

// console.log (obtenerTiempoFaltante('DEC 25 8999 00:00:00 GMT-0500'));

// funcion para mostrar el tiempo faltante en el html


function cuentaRegresiva(tiempoFaltante) {
    const dias = document.getElementById('dias');
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
    const mensajito = document.getElementById('mensaje');
    const mensaje = ('¡Feliz Navidad!')
    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`;
        minutos.innerHTML = `${t.minutosFaltantes}`;
        segundos.innerHTML = `${t.segundosFaltantes}`;


// condicinal de if para activar los botones y que estos puedan poner o parar la musica utilizando la funcion activarBotones. tambien para cambiar img por gif y por ultimo para dejar el temporizador en ceros y que no siga contando hacia atrás

        if (t.tiempoFaltante <=0) {
            clearInterval(tiempoActual);
            mensajito.innerHTML = mensaje;
            santaBailando();
            activarBotones();
            t={
                segundosFaltantes:'00',
                minutosFaltantes:'00',
                horasFaltantes:'00',
                diasFaltantes:'00',
                tiempoFaltante: 0
            };
        }
        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`;
        minutos.innerHTML = `${t.minutosFaltantes}`;
        segundos.innerHTML = `${t.segundosFaltantes}`;

    }, 1000);
};

cuentaRegresiva('JUL 19 2024 10:47:00 GMT-0500');
// funcion para cambiar la imagen del papa noel(utilizada cuando el temporizador llega a 0)
function santaBailando() {
    imgStatic.src = "../img/074f7fe522bce5ab670ad920357a19b1.gif";
}

// función para que la musica suene cuando se clickeen el boton play y se pause cuando se clickee el boton pause. tambien para que al hacer click suene el clicksound

// además tiene la funcionalidad de dejar el hover de los botones activos una vez son clickeados y devolverlos a su estado original si el otro el clickeado
function activarBotones() {
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');

    playButton.addEventListener('click', () => {
        clickSound.play();
        cancion.play();
        playButton.classList.add('active');
        pauseButton.classList.remove('active');
    });

    pauseButton.addEventListener('click', () => {
        clickSound.play();
        cancion.pause();
        pauseButton.classList.add('active');
        playButton.classList.remove('active');
    });
}


