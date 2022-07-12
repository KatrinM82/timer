const counterElement = document.querySelector('#counter')

let counter = 0;
let timerID;

const buttonStart = document.querySelector('#start');
buttonStart.onclick = function (){
    timerID = setInterval(function(){
        counter++;
        counterElement.innerText = counter;
    }, 1000); };
  

const buttonPause = document.querySelector('#pause');

buttonPause.onclick = function (){
    clearInterval(timerID);
};

const buttonReset = document.querySelector('#reset');
buttonReset.onclick = function () {
    clearInterval(timerID);
    counter = 0;
    counterElement.innerText = counter;
}