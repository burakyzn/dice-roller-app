const select_box = document.querySelector('.form-control');
const result_modal_body = document.querySelector('.result');
const container = document.querySelector('.container-fluid');
const roll_button = document.querySelector('#roll');
const new_dice_close = document.querySelector('.new-close');
const error_message = document.querySelector('#error')
const new_dice_text = document.querySelector('#newdice');
const about_button = document.getElementById('about');
const history_button = document.getElementById('history');
const clear_button = document.querySelector('.clear');
const modal_history = document.querySelector('.modal-history');
const dice_no = document.querySelector('.dice-no');
var dice_arr = ['4','6','8','10','12','20','50','100'];
var lastSelectedID = '';
var selectedID = '';
var result = '';
var total_result = 0;
var average = 0;
var plus;


$(document).ready(function () {
    for(var i = 0; i<50;i++){
        var newOption = document.createElement('option');
        newOption.value = i+1;
        newOption.innerHTML = i+1;
        select_box.appendChild(newOption);
    }
});

container.addEventListener('click',function(event){
    if(event.target.id != '' && event.target.classList[0] != 'btn' && event.target.classList[1] != 'dice-selected' && event.target.id != 'plus'){
        document.querySelector('#' + event.target.id).classList.add('dice-selected');

        lastSelectedID = selectedID;
        selectedID = event.target.id;
        
        if(lastSelectedID != ''){
            document.querySelector('#' + lastSelectedID).classList.remove('dice-selected');
        }
    }

    if(event.target.id == 'roll'){
        dice_no.innerHTML = selectedID;
        result_modal_body.innerHTML = '<div class="dice-cont"><img class="rotate-dice-center" style="width: 100%;" src="./src/img/dice.png"></div>'
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

            var new_dice_history = document.createElement('div');
            new_dice_history.classList.add('history-dice-con');
            new_dice_history.innerHTML = '<div class="history-dice"><img src="./src/img/undefined.png" class="history-img"></div><div><p class="history-text">' + result +'</p><p class="history-text">'+ total_result +'</p><p class="history-text">' + average + '</p></div>'
            modal_history.appendChild(new_dice_history);
            
        } else {
            result_modal_body.innerHTML = '<div class="result-numbers"> Please select the dice </div>';
        }
    }

    plus = document.querySelector('#plus');
    if(event.target.id == 'plus'){
        if(event.target.classList[1] != 'dice-selected'){
            $('.set').modal('show');
        }
    }
})

new_dice_close.addEventListener('click',function(){
    for(var i=0;i<dice_arr.length;i++){
        if(dice_arr[i] == new_dice_text.value){
            new_dice_text.value;
            return false
        }
    }

    plus.id = 'd' + new_dice_text.value;
    plus.src = './src/img/undefined.png';
    dice_arr.push(new_dice_text.value);
    new_dice_text.value = '';
        
    plus.classList.add('dice-selected');
    lastSelectedID = selectedID;
    selectedID = plus.id;
    if(lastSelectedID != ''){
        document.querySelector('#' + lastSelectedID).classList.remove('dice-selected');
    }   
})

new_dice_text.addEventListener('keyup',function(e){
    if(new_dice_text.value > 100 || new_dice_text.value < 0){
        error_message.classList.remove('error-hide');
        error_message.classList.add('error-show');
        $('.new-close').prop('disabled', true);
    } else {
        error_message.classList.add('error-hide');
        error_message.classList.remove('error-show');
        $('.new-close').prop('disabled', false);
    }
})

about_button.addEventListener('click',function(){
    $('.about').modal('show');
})

history_button.addEventListener('click',function(){
    $('.history').modal('show');
})

clear_button.addEventListener('click',function(){
    modal_history.innerHTML = '';
})