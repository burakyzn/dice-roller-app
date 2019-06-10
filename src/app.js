const select_box = document.querySelector('.form-control');
const modal_body = document.querySelector('.modal-body');
const container = document.querySelector('.container-fluid');
const imageList = ['d4','d6','d8','d10','d12','d20','d50','d100'];

$(document).ready(function () {
    setup();
});

function setup(){   
    for(var i = 0; i<50;i++){
        var newOption = document.createElement('option');
        newOption.value = i+1;
        newOption.innerHTML = i+1;
        select_box.appendChild(newOption);
    }
}

container.addEventListener('click',function(event){

    if(event.target.id != ''){
        for(var i = 0; i < 8; i++){
            document.querySelector('#' + imageList[i]).classList.remove('dice-selected');
        }
        document.querySelector('#' + event.target.id).classList.add('dice-selected');
    }
})


$('#rollButton').click(function (e) { 
    // var number_of_side = first_down.value;
    // var number_of_dice = second_down.value;

    // var result_arr = [];
    // for(var i=0; i < number_of_dice;i++){
    //     var random_dice = Math.floor(Math.random() * number_of_side) + 1;
    //     result_arr.push(random_dice)
    // }

    // var result = result_arr.join('+');

    // var total = 0;
    // result_arr.forEach(function(e){
    //     total += e;
    // })

    // var average = total / result_arr.length;

    $('.modal').modal('show');

    modal_body.innerHTML = '<div class="dice-effect-cont"><span class="dice-effect"></span></div>';

    setTimeout(function(){
        modal_body.innerHTML = '<div>test</div>';
    },2000);

});
