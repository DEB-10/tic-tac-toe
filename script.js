let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn=true;
let count=0;
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }
        else
        {
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        count++;
        let iswin=winner();
        if(count===9 && !iswin){
            gamedraw();
        }
    });
});
const gamedraw=()=>{
     msg.innerText=`Game Draw`;
     msgContainer.classList.remove("hide");
     disable();
};
const winner=()=>{
    for(let wi of win){
        let pos1=boxes[wi[0]].innerText;
        let pos2=boxes[wi[1]].innerText;
        let pos3=boxes[wi[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                show(pos1);
                return true;
            }
        }
    }
};
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const show=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
};
const enable = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
};
const resetgame=()=>{
    turn=true;
    count=0;
    enable();
    msgContainer.classList.add("hide");
    msg.innerText="";
};
resetbtn.addEventListener("click", resetgame);
