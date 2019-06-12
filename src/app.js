const select_box = document.querySelector('.form-control');
const result_modal_body = document.querySelector('.result');
const container = document.querySelector('.container-fluid');
const roll_button = document.querySelector('.btn');
const plus = document.querySelector('#plus');
const new_dice_close = document.querySelector('.new-close');
const error_message = document.querySelector('#error')
var new_dice_text = document.querySelector('#newdice');
var lastSelectedID = '';
var selectedID = '';
var result = '';
var total_result = 0;
var average = 0;

$(document).ready(function () {
    for(var i = 0; i<50;i++){
        var newOption = document.createElement('option');
        newOption.value = i+1;
        newOption.innerHTML = i+1;
        select_box.appendChild(newOption);
    }
});

container.addEventListener('click',function(event){
    if(event.target.id != '' && event.target.classList[0] != 'btn' && event.target.id != 'plus'){
        document.querySelector('#' + event.target.id).classList.add('dice-selected');
        result_modal_body.innerHTML = '<div class="modal-cont"><i class="fas fa-dice-six rotate-dice-center"></i></div>'

        lastSelectedID = selectedID;
        selectedID = event.target.id;
        
        if(lastSelectedID != ''){
            document.querySelector('#' + lastSelectedID).classList.remove('dice-selected');
        }
    }

    if(event.target.type == 'button'){
        $('.res').modal('show');
        if(selectedID != ''){
            result = '';
            total_result = 0;

            for(var i=0;i<select_box.value;i++){
                var randomResult = Math.floor(Math.random() * selectedID.substring(1)) + 1;
                result += randomResult + ' ';
                total_result += randomResult;
            }

            average = total_result / select_box.value;
            
            setTimeout(function () {
                result_modal_body.innerHTML = '<div class="result-numbers">' + result + '</div><div class="total-result">' + total_result + '</div><div class="result-numbers">' + average + '</div>';
            }, 1000);
            
        } else {
            result_modal_body.innerHTML = '<div class="result-numbers"> Please select the dice </div>';
        }
    }

    if(event.target.id == 'plus'){
        $('.set').modal('show');
    }
})

roll_button.addEventListener('click',function(){
    result_modal_body.innerHTML = '<div class="modal-cont"><i class="fas fa-dice-six rotate-dice-center"></i></div>'
})

new_dice_close.addEventListener('click',function(){
    plus.id = 'd' + new_dice_text.value;
    plus.src = './src/img/undefined.png';
})

new_dice_text.addEventListener('keyup',function(){
    if(new_dice_text.value > 100 || new_dice_text.value < 0){
        error_message.innerHTML = 'Write a number between 0 and 100.';
        error_message.classList.remove('error-hide');
        error_message.classList.add('error-show');
        $('.new-close').prop('disabled', true);
    } else if(new_dice_text.value == 4 || new_dice_text.value == 6 || new_dice_text.value == 8 || new_dice_text.value == 10 || new_dice_text.value == 12 || new_dice_text.value == 20 || new_dice_text.value == 50 || new_dice_text.value == 100) {
        error_message.innerHTML = 'Enter a dice that does not exist';
        error_message.classList.remove('error-hide');
        error_message.classList.add('error-show');
        $('.new-close').prop('disabled', true);
    }  else {
        error_message.classList.add('error-hide');
        error_message.classList.remove('error-show');
        $('.new-close').prop('disabled', false);
    }
})

function number_validation(e) {
    islem = document.all ? window.event : e;
    karakter = document.all ? islem.keyCode : islem.which;

    if(karakter<48||karakter>57) {
        if(document.all) { islem.returnValue = false; } else { islem.preventDefault();}
    }
}
