// 'use strict';

const startButton = document.querySelector('.start-button'),
    firstScreen = document.querySelector('.first-screen'),
    mainForm = document.querySelector('.main-form'),
    formCalculate = document.querySelector('.form-calculate'),
    endButton = document.querySelector('.end-button'),
    total = document.querySelector('.total'),
    fastRange = document.querySelector('.fast-range');

// console.log(startButton);

// startButton.onclick = function(){
//     console.log("Клик по кнопке!!!");
// };
function showElements(element){
    element.style.display = 'block';
}

function hideElements(element){
    element.style.display = 'none';
}

function handlerCallBackForm(event){
    const target = event.target;
    // console.log(event);
    if(target.classList.contains('want-faster')){
        // if(target.checked){
        //     showElements(fastRange);
        // }else{
        //     hideElements(fastRange);
        // }
        target.checked ? showElements(fastRange) : hideElements(fastRange);
    }

}

startButton.addEventListener('click', function(){
    // console.log('Клик по кнопке!!!');
    showElements(mainForm);
    hideElements(firstScreen);
});

endButton.addEventListener('click', function(){
    for (const element of formCalculate.elements) {
        if(element.tagName === 'FIELDSET'){
            hideElements(element);
        }
    }

    showElements(total);
    
});


formCalculate.addEventListener('change', handlerCallBackForm);

