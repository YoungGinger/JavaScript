  
      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };
    
      updateScoreElement();

      
      /*
    if (!score){
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    }
    */
    
    let isAutoPlaying = false;
    let intervalId;

   //const autoPlay = () => {


   // };
   
    function autoPlay() {
      if (!isAutoPlaying) {
        intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        
      } else {
        clearInterval(isAutoPlaying);
        isAutoPlaying = false;
      }
    }

    document.querySelector('.js-rock-button')
      .addEventListener('click', () => {
        playGame('rock');
      });
      
    document.querySelector('.js-paper-button')
      .addEventListener('click', () => {
        playGame('paper');
      });

    document.querySelector('.js-scissors-button')
      .addEventListener('click', () => {
        playGame('scissors');
      });

    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'r') {
        playGame('rock');
      } else if (event.key === 'p') {
        playGame('paper');
      } else if (event.key === 's') {
        playGame('scissorsr');
      }


    });

    function playGame(playerMove) {

      const computerMove = pickComputerMove();

      let result = '';
     
      if (computerMove === 'scissors') {
        if (playerMove === 'scissors') {
          result = 'Tie.';
        } else if (playerMove === 'rock') {
          result = 'You win.'; 
        } else if (playerMove === 'paper') {
          result = 'You lose.';
        }
        
      } else if (computerMove === 'rock') {
        if(playerMove === 'rock') {
          result = 'Tie.';
        } else if (playerMove === 'paper') {
          result = 'You win.'
        } else if (playerMove === 'scissors') {
          result = 'You lose.'
        }

      } else if (computerMove === 'paper') {
        if (playerMove === 'paper') {
          result = 'Tie.';
        } else if (playerMove === 'scissors') {
          result = 'You win.';
        } else if (playerMove === 'rock') {
          result = 'You lose.';
        }
        
      }
     
      if (result === 'You win.'){
        score.wins += 1;
      } else if (result === 'You lose.'){
        score.losses += 1;
      } else if (result === 'Tie.'){
        score.ties += 1;
      }
      
      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').
        innerHTML = result;

      document.querySelector('.js-moves').
        innerHTML =`You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
  
    <img src="images/${computerMove}-emoji.png"  class="move-icon">
    Computer`;
      
    

    }

    function updateScoreElement() {
      document.querySelector('.js-score')
        .innerHTML = (`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
    }

    function pickComputerMove(){

    let computerMove = '';
    const randoNumber = Math.random();

    if (randoNumber >= 0 && randoNumber < 1 / 3){
      computerMove = ('rock');
    } else if (randoNumber >= 1 / 3 && randoNumber < 2 / 3) {
      computerMove =  ('paper');
    } else if (randoNumber >= 2 / 3 && randoNumber < 1) {
      computerMove = ('scissors');
    }  
    return computerMove;
   }
