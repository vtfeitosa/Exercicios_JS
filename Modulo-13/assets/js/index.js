let elemento = document.querySelectorAll('.elemento');

let jogada = 0 ;

let tabuleiro = [
    ['','',''],
    ['','',''],
    ['','','']
];

for (let index = 0; index < elemento.length; index++) {
    elemento[index].addEventListener('click',verificar);
}

function verificar(e){
    const elemento = e.target;
    if(!elemento.innerHTML){
        alt();
    } 

    function alt(){

        if (jogada == 0 ){
            elemento.innerHTML = "X";
            jogada++;
        }else {
            elemento.innerHTML = "O";
            jogada--;
        }

        armazenar();
        function armazenar(){
            const position = {
                line: Number(elemento.dataset.line), 
                colun: Number(elemento.dataset.colun)
            };

            tabuleiro[position.line][position.colun] = elemento.innerHTML;
            console.log(tabuleiro);
            handleResultValidation()
        }
    }
} 

const winningConditions = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]]
];
let velha = 0;

function handleResultValidation() {
    let roundWon = false;
    velha++
    for (let i = 0; i <= 7; i++) {
        const WC = winningConditions[i];
        let a = tabuleiro[ WC[0][0] ][ WC[0][1] ];
        let b = tabuleiro[ WC[1][0] ][ WC[1][1] ];
        let c = tabuleiro[ WC[2][0] ][ WC[2][1] ];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        // adicionar uma função para fim de jogo
        alert((jogada == 1)? "Vencedor X": "Vencedor O")
        return;
    }
    else if (velha == 9){
        alert("Velha")
        velha = 0
        return;
    }
}

let resetGame = document.querySelector('#resetGame');
resetGame.addEventListener("click", reset);

function reset() {
    tabuleiro = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    elemento.forEach((element) => {
        // element = elemento[index]
        element.innerHTML = "";
    });

    velha = 0

    return;

}

