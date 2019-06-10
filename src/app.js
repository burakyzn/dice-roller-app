const first_down = document.querySelector('#firstDown');
const second_down = document.querySelector('#secondDown');
const modal_body = document.querySelector('#modal-body')

$(document).ready(function () {
    setup();
});

function setup(){   
    for(var i = 0; i<10;i++){
        var newOption = document.createElement('option');
        newOption.value = i+1;
        newOption.innerHTML = i+1;
        second_down.appendChild(newOption);
    }

    for(var i = 1; i<20;i++){
        var newOption = document.createElement('option');
        newOption.value = i+1;
        newOption.innerHTML = i+1;
        first_down.appendChild(newOption);
    }
}

$('#rollButton').click(function (e) { 
    var number_of_side = first_down.value;
    var number_of_dice = second_down.value;

    var result_arr = [];
    for(var i=0; i < number_of_dice;i++){
        var random_dice = Math.floor(Math.random() * number_of_side) + 1;
        result_arr.push(random_dice)
    }

    var result = result_arr.join('+');

    var total = 0;
    result_arr.forEach(function(e){
        total += e;
    })

    var average = total / result_arr.length;

    modal_body.innerHTML = 'Result : ' + result + '<br>' + 'Total : '+ total + '<br>' + 'Average : ' + average;

    $('#myModal').modal('show');
});