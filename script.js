var medialunas = 0;
var inventario = [0,0];

var medialunasProd = [2,4];
var precioProducto = [100,300];

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
        `Panaderos: ${inventario[0]}<br>
         Hornos: ${inventario[1]}
        `;
}

//------------------------
var FPSProduce = 1;

setInterval(function(){
    producir();
},1000/FPSProduce);

var FPSCicker = 30;

setInterval(function(){
    render();
},1000/FPSCicker);
