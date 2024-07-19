let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//playerx,player0

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach( (box) =>     {
    box.addEventListener("click",() => {
        console.log("btn was clicked"); 
            if(turn0){
                box.innerText = "0";
                turn0 = false;
            }
            else{
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled = true;
            checkWinner();
    });
});
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
};
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
};

const showwinner = (winner) => {
        msg.innerText = `Congratulations ,   winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disabledBoxes(); 
};
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos1val !== ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val );
                showwinner(pos1val);
            }
        }
    }
};
resetBtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);