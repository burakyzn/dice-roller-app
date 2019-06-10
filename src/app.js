const select_box = document.querySelector('.form-control');
const modal_body = document.querySelector('.modal-body');
const container = document.querySelector('.container-fluid');
const imageList = ['d4','d6','d8','d10','d12','d20','d50','d100'];
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
        for(var i = 0; i < 8; i++){
            document.querySelector('#' + imageList[i]).classList.remove('dice-selected');
        }
        document.querySelector('#' + event.target.id).classList.add('dice-selected');

        selectedID = event.target.id;
    }

    if(event.target.type == 'button'){
        if(selectedID != ''){
            $('.modal').modal('show');

            console.log(selectedID);
            modal_body.innerHTML = '<div class="dice-effect-cont"><span class="dice-effect"></span></div> ';

            setTimeout(function () {
                modal_body.innerHTML = '<div>test</div>';
            }, 2000);
        } else {
            console.log('zar secilmedi!');
        }
    }
})

