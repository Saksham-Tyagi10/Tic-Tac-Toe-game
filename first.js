let boxes = document.querySelectorAll(".box");//boxes contain so many buttons so it can be an array of buttons.
let turnO= true;
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-cont");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newGame");
let count = 0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]
boxes.forEach((box) =>{  //box represents each element of boxes array just as i of 'for-of' loop.
    box.addEventListener("click",()=>{
        
        if(turnO){
          box.innerText="O";
            turnO=false;
        }else{
            box.innerHTML="<b style='color:green'>X</b>";
            turnO=true;
        }
        count++;
        box.disabled = true;
        checkWinner();
    })
})
    function checkWinner(){
    for(let pattern of winPattern){
      let posval1 = boxes[pattern[0]].innerText;// by this we access value inside each box so that we compare whether trio is equal or not.
       let posval2 = boxes[pattern[1]].innerText;
       let posval3 = boxes[pattern[2]].innerText;
        if(posval1 != "" && posval2 !="" && posval3 != ""){ //none of the box is empty.
            if(posval1===posval2 && posval2===posval3){
                showWinner(posval1);
            }
            else if(count===9){
                showDraw();
            }
        }      
    }
} 
const disableBox = () =>{
    for(let box of boxes){
     box.disabled=true;
    }
}
function showWinner(winner){
msg.innerText= ("CONGRATULATIONS, WINNER" );
msgContainer.classList.remove("hide");
disableBox();
}


const enableBox = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= "";
    }
      
}
const reset =() =>{
    turnO= true;
    msgContainer.classList.add("hide");
    enableBox();
}
resetBtn.addEventListener("click", reset);
newBtn.addEventListener("click", reset);

const showDraw= () =>{
    msg.innerText= (" Match is DRAW ! " );
msgContainer.classList.remove("hide");
disableBox();
}

