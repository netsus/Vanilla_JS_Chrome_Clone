const form = document.querySelector('select_country'),
country = document.querySelector(country),
CO_LS = 'Country';


function saveCo(text){
    localStorage.setItem(CO_LS,currentValue);
}

function handleSubmit(){
    const currentValue = country.value;
    saveCo(currentValue);  
}

function askForCo(){
    form.addEventListener('submit', handleSubmit);
}

function loadCo(){
    const currentCo = localStorage.getItem(CO_LS);
    if (currentCo ===null){
        askForCo();
    }
}

function init(){
    loadCo();
}
init();