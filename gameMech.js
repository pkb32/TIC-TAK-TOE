document.body.style.backgroundColor="pink";

let boxes= document.querySelectorAll(".box");
let resetGame= document.querySelector("#resetGame");

let msgcnt = document.querySelector('.msg-cnt');
let msg = document.querySelector('#msg');

// X or O
let turn = true // X-> false , O->true
const winPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//assigning the box element

boxes.forEach((box)=> {
    box.addEventListener('click', () => {
        // console.log("clicked");
        if(turn)
        {
            box.innerText="O"
            box.style.color= "blue";
            turn=false;
        }
        else{
            box.innerText="X"
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});


//diable all the boxes after the player wins

const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

//display winner
const showWinner = (val)=>{

    
        msg.innerText = `Congratulations, winner is ${val} !`;
        msgcnt.classList.remove("hide");
        disableBoxes();
};


//decide winner
const checkWinner = () => {

    for(let patterns of winPattern){
        //console.log(patterns[0],patterns[1], patterns[2]);
        //console.log(boxes[patterns[0]],boxes[patterns[1]], boxes[patterns[2]]);    

        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
              if( pos1 === pos2 && pos2 === pos3)
              {
                console.log("Winner!", pos1);
                showWinner(pos1);
                
              }
        }
    
    }

   
};

//Game Reset

resetGame.addEventListener("click",()=>{
    boxes.forEach((box)=> {
        box.innerText="";  
        box.disabled=false; 
        msgcnt.classList.add("hide");
    });
});





    

   