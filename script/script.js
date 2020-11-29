const startButton = document.querySelector('.start-button');
console.log(startButton);

// console.dir(startButton);

// startButton.onclick = function(){
//     console.log("Клик по кнопке!!!");
// }

startButton.addEventListener('click', function(){
    console.log('Клик по кнопке!!!');
});