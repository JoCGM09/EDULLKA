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
        '<i class="descuento">30% ...</i>',
        '<i class="descuento">40% ...</i>',
        '<i class="descuento">50% !!!</i>'
    ],
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});