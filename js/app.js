window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    var navbar = document.getElementById("navbar");
    if (scrolled >= 100) { // this refers to window
        navbar.classList.add("active");
    }else{
        navbar.classList.remove("active");
    }
});

popUpWsp = () => {

    let btnClosePopUp = document.querySelector('.close-button');
    let btnOpenPopUp = document.querySelector('.wsp-button');
    let popUp = document.querySelector('.contenedor-chat');
    let btnSend = document.getElementById('send-button');

    btnClosePopUp.addEventListener("click", () => {
        popUp.classList.toggle('active');
    });

    btnOpenPopUp.addEventListener("click", () => {
        popUp.classList.toggle('active');
    });

    btnSend.addEventListener("click", () => {
        let msg = document.getElementById('mensaje').value;
        let realmsg = msg.replace(/ /g, "%20");
        let telefono = "51933839178";
        window.open('https://api.whatsapp.com/send?phone='+telefono+'&text='+realmsg, '_blank');
    });
}

popUpWsp();

const typed = new Typed('.typed', {
    strings: [
        'Descubre una nueva <i>metodología</i> de aprendizaje'
    ],
    typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

simplyCountdown('#cuenta', {
    year: 2021, // required
    month: 1, // required
    day: 31, // required
    hours: 17, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'd', plural: 'd' },
        hours: { singular: 'h', plural: 'h' },
        minutes: { singular: 'm', plural: 'm' },
        seconds: { singular: 's', plural: 's' }
    },
    plural: false, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC or not - default : false
    onEnd: function() {
        
        return; 
    }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

$(document).ready(function() {
    setTimeout(function() {
        $(".cuenta").fadeIn(1500);
    },4800);
});