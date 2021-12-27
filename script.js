// ------------------------ Variables ------------------------

var medialunas = 0;
var inventario = [0,0,0];

var medialunasProd = [1,1,2];
var precioProducto = [15,100,300];


// ------------------------ Funciones / condicionales ------------------------


//Sonido de masa al hacer click
//Con un bucle for podemos hacer que el audio se repita al clickear muchas veces sin tener que esperar a que este termine.
function audioPlay(){
    var audio = new Audio("./audio/crack.ogg");
    for(i= 0; i<audio.length; i++){
        audio[i].pause();
        audio[i].currentTime = 0;
    }
    audio.play();
    audio.volume = 0.3;
}



function clic(){
    medialunas++;
    
}


function comprar(objeto){

    if(medialunas >= precioProducto[objeto]){
       inventario[objeto]++;
       medialunas -= precioProducto[objeto];
    } else {
        alert('No tenes dinero');
    }
}

function producir(){
    for(contador=0; contador<inventario.length; contador++){
        medialunas += inventario[contador] * medialunasProd[contador];
    }
}


function render(){
    document.getElementById("contador").innerHTML = medialunas;
    document.getElementById("inventario").innerHTML = 
        `Harina: ${inventario[0]}<br>
         Panaderos: ${inventario[1]}<br>
         Hornos: ${inventario[2]}
        `;
}

//--------------------

var FPSProduce = 1;

setInterval(function(){
    producir();
},1000/FPSProduce);

var FPSCicker = 30;

setInterval(function(){
    render();
},1000/FPSCicker);

var FPSQuotes = 0.1;

setInterval(function(){
    randomQuoteGen();
},1000/FPSQuotes);

//----------------------------- Quotes -----------------------------

let citasHtml = document.getElementById("mensajes");
let imgBtn = document.getElementById('medialunita');
let quotes = [
    "¿De grasa? ¿De manteca? Da igual, las medialunas son geniales",
    "Tus medialunas son un éxito. Todo el mundo habla de lo genial que son tus medialunas.",
    "La voz se corre cada vez mas y mas, pronto conquistaras el mundo entero con tus medialunas",
    "Apareció una nueva religión que rinde culto a tus medialunas.",
    "Estados Unidos y China se encuentra en una disputa por la compra de tus medialunas.",
    "Gracias a tus medialunas, Argentina se volvió una potencia mundial",
    "Tus medialunas son altas en grasa, gluten, algunas de manteca, otras de azucar. Hiptonizan a la gente.",
    "“Estas medialunas arruinaron mi vida, y apenas tengo 31 años” - Juan Topo",
    "Mientras mas como estas medialunas, mas cerca estoy del cielo",
    "Tus medialunas llegaron al espacio, no hay espacio en la tierra para tus medialunas",
    "Tus medialunas tienen una masa de 1.898 × 10^27 kg equivalente al planeta Júpiter",
    "Elon Musk planea llevar tus medialunas a Marte",
    "Todo el mundo ama tus medialunas, dios ama tus medialunas",
];

function randomQuoteGen(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    citasHtml.innerHTML = randomQuote;

}
