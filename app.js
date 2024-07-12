let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userchoicepara=document.querySelector("#user-score");
const compchoicepara=document.querySelector("#comp-score");




const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];




};


const drawgame=()=>{


    msg.innerText="Game was draw,Play again"; 
    msg.style.backgroundColor="#081b31";

   


};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){


     userscore++;
     userchoicepara.innerText=userscore;
        msg.innerText=`You win! Your  ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";


    }
    else{
        compscore++;
        compchoicepara.innerText=compscore;
        msg.innerText=`You lose  ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="red";
    }



};



const playgame=(userchoice)=>{
    console.log("User choice is",userchoice);

    const compchoice=gencompchoice();
    console.log("compchoice",compchoice);

    if(userchoice===compchoice){
        //draw game
        drawgame(); 
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;

        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);

    }

};



choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
     
        playgame(userchoice);



    });
});
