// 'use strict';
const DATA = {
    whichSite: ["одностраничный сайт", "многостраничный сайт", "интернет магазин"],
    price: [4000, 8000, 26000],
    desktopTemplates: [50, 40, 30],
    adapt: 20,
    mobileTemplates: 15,
    editable: 10,
    metrikaYandex: [500, 1000, 2000],
    analyticsGoogle: [850, 1350, 3000],
    sendOrder: 500,
    deadline: [[2, 7], [3, 10], [7, 14]],
    deadlinePearcent: [20, 17, 15]

};

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
    }if(target.classList.contains('calc-handler')){
        priceCalculation(target);
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

