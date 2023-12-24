// Variables Declaration
const visor = document.querySelector('#visor');
const calculator = document.querySelector('#main_div');
const btns_both = document.querySelectorAll('.number, .operator');
const btns_number = document.querySelectorAll('.number');
const btn_equal = document.querySelector('.equal');
const btns_operator = document.querySelectorAll('.operator');
document.querySelectorAll('.blank').forEach(function(btn){btn.disabled = true})
let first_number = null;
let second_number = null;
let symbol = null;
let prev_first_number = '';
let prev_second_number = '';
// ----------------------------------------------------------------------------------------
// Functions

function addNumber(num_1, num_2){
    return parseInt(num_1) + parseInt(num_2);
}

function subNumber(num_1, num_2){
    return parseInt(num_1) - parseInt(num_2);
}

function multNumber(num_1, num_2){
    return parseInt(num_1) * parseInt(num_2);
}

function divNumber(num_1, num_2){
    return parseFloat(num_1) / parseFloat(num_2);
}

// ===========================================================================================
// Script

calculator.addEventListener('click', function(event) {
    
    const target = event.target;

    if(target.tagName === 'BUTTON'){
        if(target.classList.contains('number')){
            visor.textContent = visor.textContent + target.textContent;
            if(first_number === null && symbol === null && second_number === null){
                prev_first_number += target.textContent;

            }

            if(first_number != null && symbol != null && second_number === null){
                prev_second_number += target.textContent;
            }


        }

        if(target.classList.contains('operator')){

            if(first_number === null && symbol === null && second_number === null){
                first_number = parseInt(prev_first_number);
                visor.textContent = visor.textContent + ' ' + target.textContent + ' ';
                symbol = target.textContent;
                // visor.textContent = visor.textContent + target.textContent + " ";

                // btns_number.forEach(function(btn) {
                //     btn.disabled = false});
                
                btns_operator.forEach(function(btn) {
                     btn.disabled = true});
            }



        }

        if(target.classList.contains('equal')){
            if(first_number != null && symbol != null && second_number != null || prev_second_number != ''){
                second_number = parseInt(prev_second_number);
                if(symbol === '+'){
                    result = addNumber(first_number, second_number);
                    visor.textContent = result;
                    btns_number.forEach(function(btn) {
                    btn.disabled = true});
                }
                else if(symbol === '-'){
                    result = subNumber(first_number, second_number);
                    visor.textContent = result;
                    btns_number.forEach(function(btn) {
                    btn.disabled = true});
                }
                else if(symbol === '*'){
                    result = multNumber(first_number, second_number);
                    visor.textContent = result;
                    btns_number.forEach(function(btn) {
                        btn.disabled = true});
                }
                else if(symbol === '/'){
                    result = divNumber(first_number, second_number);
                    visor.textContent = result;
                    btns_number.forEach(function(btn) {
                    btn.disabled = true});
                }
            }
        }
        

        if(target.textContent === 'Limpar'){
            visor.textContent = '';
            first_number = null;
            second_number = null;
            symbol = null;
            prev_first_number = '';
            prev_second_number = '';

            btns_both.forEach(function(btn) {
                btn.disabled = false});
        }
    }

});