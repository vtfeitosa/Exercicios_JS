let cep = document.getElementById("cep");

cep.addEventListener ('input', inputCep);
cep.addEventListener ('keyup', keyupCep);


// Função dedicada a limitar o input apenas para números
function inputCep() {
    if (isNaN(cep.value)){
        cep.value = cep.value.slice(0, -1);
    }
}


// Função dedicada a limitar o input com número 'x' de caracteres
function keyupCep(){
    if(cep.value.length>=9){
        console.log("oi")
        let cont = parseInt( cep.value.length - (cep.value.lenght - 8));
        console.log(cont)
        cep.value =  cep.value.slice(0, 8);
        return;
    }
}


// Função dedicada a capturar o input 'cep' e preencher o <p> com o Endereço completo.
let btnConsult = document.querySelector("#btnConsult");
let address = document.querySelector("#address");

btnConsult.addEventListener('click',checkAdress);

function checkAdress(){
    console.log("oi2");

    fetch(`https://cep.awesomeapi.com.br/json/${cep.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            
            address.innerHTML = 
                `<p>
                ${data.address}, ${data.district}, ${data.city} - ${data.state} (Latitude: ${data.lat} - Longitude: ${data.lng}
                </p>`

        })
}
