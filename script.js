const combinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [1,5,9],
    [3,5,7],
    [3,6,9]
]

const content = document.querySelector(".content");
const historyX = [];
const historyO = [];
let player = 'X';

content.addEventListener("click", handleClick);

function createMarkup(){
    let markup = '';
    for(let i = 0; i <= 9; i++){
        markup += `<div class="item" data-id="${i}></div>`
    }
    content.innerHTML = markup;
}

createMarkup();

function handleClick(enent){
    if(event.target === event.currentTarget || event.target.textContent){
        return;
    }
}

const id = +event.target.dataset.id;
let isWinner = false;

if (player === 'X'){
    historyX.push(id);
    isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;

}else{
    historyO.push(id);
    isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
}

if(isWinner){
    const instance = basicLightbox.create(`<div class="box">
    <h1>Player - ${player} is winner</h1>
    </div>`)

    instance.show();
    resetGame();
    return;
}

event.target.textContent = player;
player = player === 'X' ? 'O' : 'X';

function checkWinner(arr){
    return combinations.some(item => item.every(id => arr.includes(id)))

}

function  resetGame(){
    createMarkup();
    player = 'X';
    historyX.splice(0);
    historyO.splice(0);
}