let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
}


function updateScoreele(){
    document.querySelector('.jsscore').innerHTML=`Wins:${score.wins}. Losses:${score.losses}. Ties:${score.ties}`;

}

updateScoreele();

function computerMove(){
    let randomNum= Math.random();
    

if(randomNum>=0 && randomNum<1/3){
    computerMove1='rock';

}
else if(randomNum>=1/3 && randomNum<2/3){
    computerMove1='paper';
}
else if(randomNum>=2/3 && randomNum<1){
    computerMove1='scissors';
}
return computerMove1;
}  

function playgame(playerMove){
    let computerMove1= computerMove();
    let result ='';
    if(playerMove==='rock'){
    if(computerMove1==='rock'){
        result='TIE';
    }

    else if(computerMove1==='paper'){
        result='LOSE';
    }

    else if(computerMove1==='scissors'){
        result='WIN';
    }}

    if(playerMove==='paper'){
         result ='';
        if(computerMove1==='rock'){
            result='WIN';
        }

        else if(computerMove1==='paper'){
            result='TIE';
        }

        else if(computerMove1==='scissors'){
            result='LOSE';
        }
    }

    if(playerMove==='scissors'){
        result ='';
        if(computerMove1==='rock'){
            result='LOSE';
        }

        else if(computerMove1==='paper'){
            result='WIN';
        }

        else if(computerMove1==='scissors'){
            result='TIE';
        }
    }

    if(result==='WIN'){
        score.wins++;
    }else if(result==='LOSE'){
        score.losses++;
    }else if(result==='TIE'){
        score.ties++;
    }

    document.querySelector('.jsresult').innerHTML= `You ${result}`;
    document.querySelector('.jschoice').innerHTML= `You choose ${playerMove}. Computer choose ${computerMove1}`;
    updateScoreele();

    localStorage.setItem('score',JSON.stringify(score));

    // alert(`You choose ${playerMove}. Computer choose ${computerMove1}.You ${result}. \n Wins:${score.wins}. Losses:${score.losses}. Ties:${score.ties}`);
}