console.log("Welcome to Tic Tac Toe");
let music = new Audio("/SOUNDS/background.mp3");
music.loop = true;
// let gamestart = new Audio("/SOUNDS/gamestart.mp3"); //BOTH ARE ANOTHER VOLUME ARE ADD
// let gameover = new Audio("/SOUNDS/endgame.mp3");
let turn = "X";
let isWin = false;

function startMusic() {
    music.currentTime = 0;
    music.play();
}

function stopMusic() {
    music.pause();
    music.currentTime = 0;
}




//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth <= 1000) {

        let wins = [
            [0, 1, 2, 7, 10, 0],
            [3, 4, 5, 7, 30, 0],
            [6, 7, 8, 5, 50, 0],
            [0, 3, 6, -13, 30, 90],
            [1, 4, 7, 7, 30, 90],
            [2, 5, 8, 27, 30, 90],
            [0, 4, 8, 8, 30, 45],
            [2, 4, 6, 8, 29, 135],
        ]

        wins.forEach((e) => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
                (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
                (boxtext[e[0]].innerText !== "")) {
                console.log(document.querySelector('.info').innerText = boxtext[e[0]].innerText + " " + "is Won");
                // music.pause();
                isWin = true;
                stopMusic();
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
                document.querySelector(".line").style.width = "46vw";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            }
        });

    } else {
        let wins = [
            [0, 1, 2, 5, 5, 0],
            [3, 4, 5, 5, 15, 0],
            [6, 7, 8, 5, 25, 0],
            [0, 3, 6, -5, 15, 90],
            [1, 4, 7, 5, 15, 90],
            [2, 5, 8, 15, 15, 90],
            [0, 4, 8, 5, 15, 45],
            [2, 4, 6, 5, 15, 135],
        ]

        wins.forEach((e) => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
                (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
                (boxtext[e[0]].innerText !== "")) {
                console.log(document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won");
                isWin = true;
                stopMusic();
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
                document.querySelector(".line").style.width = "20vw";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            }
        });
    }

}



//Game Logic
let boxes = document.getElementsByClassName("box");
console.log(boxes);
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            // gamestart.play();
            checkWin();
            if (!isWin) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    });
});


//Add onclick listener to reset button

let reset = document.querySelector('#rest');
// music.play();
reset.addEventListener('click', (e) => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach((element) => {
        element.innerText = "";
    });
    turn = "X";
    isWin = false;
    document.querySelector(".line").style.width = "0px";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    startMusic();

})

document.addEventListener("click", ()=> {
    startMusic();
}, {once : true});