'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const diceEl = document.querySelector('.dice')
const currentPlayer0 = document.querySelector('.player--0')
const currentPlayer1 = document.querySelector('.player--1')
const totalScore0El = document.qyerySelector('.current--0')
const totalScore1El = document.qyerySelector('.current--1')

//another way of selecting Element by ID
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


//Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Preparing Initial Position of the Game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const TotalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling Dice Function
btnRoll.addEventListener('click', function(){
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
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;

        currentPlayer0.classList.toggle('player--active')
        currentPlayer1.classList.toggle('player--active')

    }
});


btnHold.addEventListener('click', function(){

});


