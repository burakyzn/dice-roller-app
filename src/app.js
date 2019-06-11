const select_box = document.querySelector('.form-control');
const modal_body = document.querySelector('.modal-body');
const container = document.querySelector('.container-fluid');
var lastSelectedID = '';
var selectedID = '';

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
        if(selectedID != ''){
            $('.modal').modal('show');

            setTimeout(function () {
                modal_body.innerHTML = '<div class="modal-cont">test</div>';
            }, 1000);
            
        } else {
            console.log('zar secilmedi!');
        }
    }
})

