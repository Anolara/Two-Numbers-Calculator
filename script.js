
const visor = document.getElementById('visor');
const calculator = document.getElementById('main_div');

calculator.addEventListener('click', function(event) {
    
    const target = event.target;

    if(target.tagName === 'BUTTON'){
        visor.textContent = visor.textContent + target.textContent;
        

        if(target.textContent === 'Limpar'){
            visor.textContent = '';
        }
    }

});