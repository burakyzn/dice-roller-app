const select_box = document.querySelector('.form-control');
const modal_body = document.querySelector('.modal-body');
const container = document.querySelector('.container-fluid');
const button = document.querySelector('.btn');
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

    if(event.target.id != '' && event.target.classList[0] != 'btn'){
        document.querySelector('#' + event.target.id).classList.add('dice-selected');
        modal_body.innerHTML = '<div class="modal-cont"><i class="fas fa-dice-six rotate-dice-center"></i></div>'

        lastSelectedID = selectedID;
        selectedID = event.target.id;
        
        if(lastSelectedID != ''){
            document.querySelector('#' + lastSelectedID).classList.remove('dice-selected');
        }
    }

    if(event.target.type == 'button'){
        $('.modal').modal('show');
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
                modal_body.innerHTML = '<div class="result-numbers">' + result + '</div><div class="total-result">' + total_result + '</div><div class="result-numbers">' + average + '</div>';
            }, 1000);
            
        } else {
            modal_body.innerHTML = '<div class="result-numbers"> Please select the dice </div>';
        }
    }
})

button.addEventListener('click',function(){
    modal_body.innerHTML = '<div class="modal-cont"><i class="fas fa-dice-six rotate-dice-center"></i></div>'
})

