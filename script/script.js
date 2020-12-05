// 'use strict';
const DATA = {
    whichSite: ["landing", "multiPage", "onlineStore"],
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
    fastRange = document.querySelector('.fast-range'),
    totalPriceSum = document.querySelector('.total_price__sum');

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

function priceCalculation(element){
    let result = 0,
        index = 0,
        options = [];
    if(element.name === 'whichSite'){
        for (const item of formCalculate.elements){
            if(item.type === 'checkbox'){
                item.checked = false;
            }
        }
        hideElements(fastRange);
    }
    for(const item of formCalculate.elements){
        if(item.name === 'whichSite' && item.checked){
            //  console.log((item.value));
            index = DATA.whichSite.indexOf(item.value);
        } else if(item.classList.contains('calc-handler') && item.checked){
            options.push(item.value);
        }
    }
   
    options.forEach(function(key){
        if(typeof(DATA[key]) === 'number') {
            if(key === 'sendOrder'){
                result+= DATA[key]
            }else{
                result += DATA.price[index] * DATA[key] / 100;
            }
        } else{
            if(key === 'desktopTemplates'){
                result += DATA.price[index] * DATA[key][index] / 100;
            }else{
                result += DATA[key][index];
            }
        }
    });

    result += DATA.price[index]; 

    totalPriceSum.textContent = result;
}

function handlerCallBackForm(event){
    const target = event.target;
    // console.log(event);
    if(target.classList.contains('want-faster')){
        if(target.checked){
            showElements(fastRange);
        }else{
            hideElements(fastRange);
        }
        // target.checked ? showElements(fastRange) : hideElements(fastRange);
    }
    
    if(target.classList.contains('calc-handler')){
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

