let btnStart = document.querySelector(".btnStart");
let btn = document.querySelector(".btn");

let h3 = document.querySelector("h3");
let start = false;
let level = 0;
let buttons = ["green", "red", "yellow", "blue"];
let userSeq = [];
let gameSeq = [];

let hides = document.querySelectorAll(".hide");

btnStart.addEventListener("click", function(){
    if(start == false){
        console.log("game started");
        start = true;
        for(hide of hides){
            hide.classList.remove("hide");
        }
        btn.classList.add("hide");
    }

    setTimeout(levelUp, 1000);
});

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    randomColor();
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

let boxes = document.querySelectorAll(".box");
for(box of boxes){
    box.addEventListener("click", function(){
        let btn = this;
        console.log(this);
        let userColor = this.getAttribute("id");
        userSeq.push(userColor);
        flash(btn);
        check(userSeq.length-1);
    });
}

function check(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerText = `Game Over! Your Score : ${level}`;
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




