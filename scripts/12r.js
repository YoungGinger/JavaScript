  
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

    document.querySelector('.js-autoplay-button')
      .addEventListener('click', () => {
        autoPlay();
      }); 

    document.querySelector('.js-reset-score-button')
      .addEventListener('click', () => {
        alertReset();
      });

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
        playGame('scissors');
      } else if (event.key === 'a') {
        autoPlay();
      } else if (event.key === 'Backspace') {
        alertReset();
      }
    });

    function alertReset () {
      let display = document.querySelector('.js-reset-alert');
      display.innerHTML = `
      <p>Are you sure you want to reset the score?
      <button class="select-button js-yes-select-button">Yes</button>
      <button class="select-button js-no-select-button">No</button>
      </p>
      `;
      document.querySelector('.js-yes-select-button')
        .addEventListener('click', () => {
        resetScore();
        display.innerHTML = '';
        
      });
    

      document.querySelector('.js-no-select-button')
      .addEventListener('click', () => {
        display.innerHTML = '';
      });

    

    }
      
    function resetScore () {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
      document.querySelector('.js-result').
        innerHTML = '';
      document.querySelector('.js-moves').
        innerHTML = '';
      }
      
      
    function autoPlay() {
      if (!isAutoPlaying) {
        intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
          document.querySelector('.js-autoplay-button') 
            .innerHTML = `Stop playing`;
        }, 1000);
        isAutoPlaying = true;
        
      } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        document.querySelector('.js-autoplay-button') 
            .innerHTML = `Auto Play`;
      }
      
    }

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

  