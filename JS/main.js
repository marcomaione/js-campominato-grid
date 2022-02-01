document.getElementById('play').addEventListener('click', play);

// funzione che gestisce il gioco

function play() {
    console.log('Hai premuto play');

    const difficolta = document.getElementById('s-difficolta').value;

    let numeroCelle;
    let cellePerRiga;

    switch (difficolta) {
        case "facile":
            default:
            numeroCelle = 100;
            break;
        case "medio":
            numeroCelle = 81;
            break;
        case "difficile":
            numeroCelle = 49;
            break;    
        
    }

    cellePerRiga = Math.sqrt(numeroCelle);

    console.log("hai scelto" + cellePerRiga + "celle");

    const gioco = document.getElementById('gioco')

    //reset del gioco

    gioco.innerHTML = "";


    for ( let i = 1; i <= numeroCelle; i++) {

        const nodo = document.createElement('div')
        nodo.classList.add('quadrato');

        const dimensione = `calc(100% / ${cellePerRiga })`;

        nodo.style.width = dimensione;
        nodo.style.height = dimensione;

        nodo.innerText = i;
    
        nodo.addEventListener('click', function (){
    
            this.classList.add('clicked');
        });
    
        gioco.appendChild(nodo);
    }
}