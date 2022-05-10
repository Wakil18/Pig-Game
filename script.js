'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const diceEl = document.querySelector('.dice');
const currentPlayer0El = document.querySelector('.player--0');
const currentPlayer1El = document.querySelector('.player--1');
const totalScore0El = document.querySelector('.current--0');
const totalScore1El = document.querySelector('.current--1');

//another way of selecting Element by ID
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


//Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let totalScores, currentScore, activePlayer, playing;

//Preparing Initial Position of the Game
const initial = function(){
    totalScores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    currentPlayer0El.classList.remove('player--winner');
    currentPlayer1El.classList.remove('player--winner');
    currentPlayer0El.classList.add('player--active');
    currentPlayer1El.classList.remove('player--active');
}

initial();


//Switch Player Function
const switchPlayer = function(){
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    currentPlayer0El.classList.toggle('player--active')
    currentPlayer1El.classList.toggle('player--active')
}



//Rolling Dice Function
btnRoll.addEventListener('click', function(){

    if(playing) {

        //Generate Random Number
        const dice = Math.trunc(Math.random() * 6) + 1;

        //Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`

        //Check for 1
        if(dice !== 1){
            //Add to Current Score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        }else{
            //Setting Current Players Score to 0
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            //Switch to next Player
            switchPlayer();
        }

    }
});

//Hold Button Function
btnHold.addEventListener('click', function(){

    if (playing) {

        //Add score to current player
        totalScores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];

        //Check if score >= 100
        if(totalScores[activePlayer] >= 20){
            //Finish the Game
            playing = false;
            diceEl.classList.remove('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`player--${activePlayer}`).classList.remove('player--active');
        }else{
            //Switch to next Player
            switchPlayer();
        }

    }

});



//New Game Function
btnNew.addEventListener('click', function(){
    initial();
});
