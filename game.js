let body = document.querySelector("body");
body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
let track = document.querySelector("#highScore");
let btnStart = document.querySelector(".btnStart");
let description = document.querySelector(".description");
let start = false;
let level = 0;
let buttons = ["green", "red", "yellow", "blue"];
let userSeq = [];
let gameSeq = [];
let highScore = [];

let hides = document.querySelectorAll(".hide");

btnStart.addEventListener("click", function(){
    if(start == false){
        console.log("game started");
        start = true;
        for(hide of hides){
            hide.classList.remove("hide");
        }
    }

    setTimeout(levelUp, 1000);
    btnStart.classList.add("hide");
});

function levelUp(){
    userSeq = [];
    level++;
    description.innerText = `Level ${level}`;
    randomColor();
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

let boxes = document.querySelectorAll(".box");
for(box of boxes){
    box.addEventListener("click", function(){
        let btn = this;
        let userColor = this.getAttribute("id");
        userSeq.push(userColor);
        flash(btn);
        check(userSeq.length-1);
    });
}

function reset(){
    start = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
    btnStart.classList.remove("hide");
    btnStart.innerText = "RESET";
    btnStart.style.backgroundColor = "rgb(48, 161, 80)";
}

function check(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp, 500);
        }
    }
    else{
        description.innerHTML = `Game Over! Your Score : <b>${level}</b> <br> Press RESET button to play again `;
        body.style.backgroundColor = "rgb(229, 9, 20);";
        setTimeout(function(){
            body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }, 250);
        highScore.push(level);
        let value = Math.max(...highScore);
        track.innerText = `High Score : ${value}`;
        reset();
    }
}

function randomColor(){
    //random btn
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = buttons[randomIdx];
    gameSeq.push(randomColor);
    let randomBtn = document.querySelector(`.${randomColor}`);
    flash(randomBtn);
}




