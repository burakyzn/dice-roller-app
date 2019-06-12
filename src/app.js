const select_box = document.querySelector('.form-control');
const result_modal_body = document.querySelector('.result');
const container = document.querySelector('.container-fluid');
const button = document.querySelector('.btn');
const plus = document.querySelector('#plus');
const new_dice_close = document.querySelector('.new-close');
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

button.addEventListener('click',function(){
    result_modal_body.innerHTML = '<div class="modal-cont"><i class="fas fa-dice-six rotate-dice-center"></i></div>'
})

plus.addEventListener('click',function(){
    
})

new_dice_close.addEventListener('click',function(){
    var new_dice_temp = document.querySelector('#newdice');
    if(new_dice_temp.value != ''){
        plus.id = 'd' + new_dice_temp.value;
        plus.src = './src/img/undefined.png';
    }
})