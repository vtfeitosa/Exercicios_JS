
let id = 1;
let arrayProdutos = [];


function salvar(){
    console.log("oi");

    let produto = lerDados();
    console.log(produto);

    if(validarCampos(produto)){
        console.log("oi2")
        adicionar(produto);
    }

    console.log(arrayProdutos);

    listaTabela();

}

function listaTabela(){
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < arrayProdutos.length; i++){
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acoes= tr.insertCell();

        td_id.innerText = arrayProdutos[i].id;
        td_produto.innerText = arrayProdutos[i].nomeProduto;
        td_valor.innerText = arrayProdutos[i].preco;

        td_id.classList.add("center");
    }
}

function adicionar(produto){
    console.log("oi3")
    arrayProdutos.push(produto);
    id++;
}

function lerDados(){
    let produto = {};

    produto.id = id;
    produto.nomeProduto = document.getElementById("product").value;
    produto.preco = document.getElementById("price").value;

    return produto;
}

function validarCampos(produto) {
    console.log("oi1")
    let msg = "";

    if(produto.nomeProduto == ""){
        msg += "Erro de Produto"
    }

    if(produto.preco == ""){
        msg += "Erro de Preço";
    }

    if(msg != ""){
        alert(msg);
        return false
    }

    return true
}

// function validarEntradas(produto, descricao, valor){
//     if (produto.lenght === 0){
//         return false;
//     };

//     if (descricao.lenght === 0){
//         return false;
//     };

//     if (valor.lenght === 0){
//         return false;
//     };

// }