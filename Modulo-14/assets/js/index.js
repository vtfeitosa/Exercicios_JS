const btnDoces = document.getElementById("btnDoces");
const btnBrigadeiros = document.getElementById("btnBrigadeiros");
const btnCupcakes = document.getElementById("btnCupcakes");

const boxImg = document.getElementById("boxImg");

import * as pagDoce from '../js/doces.js';
import * as pagBrigadeiros from '../js/brigadeiros.js';
import * as pagCupcakes from '../js/cupcakes.js';

btnDoces.addEventListener('click', doce);
btnBrigadeiros.addEventListener('click', brigadeiro);
btnCupcakes.addEventListener('click', cupcake);

function doce(){
    history.pushState('','', 'doces');

    if (location.pathname == '/Modulo-14/doces'){
        boxImg.innerHTML = pagDoce.docePage();
    }
}

function brigadeiro(){
    history.pushState('','', 'brigadeiros');

    if (location.pathname == '/Modulo-14/brigadeiros'){
        boxImg.innerHTML = pagBrigadeiros.brigadeirosPage();
    }
}

function cupcake(){
    history.pushState('','', 'cupcakes');

    if (location.pathname == '/Modulo-14/cupcakes'){
        boxImg.innerHTML = pagCupcakes.cupcakesPage();
    }
}