const first_down = document.querySelector('#firstDown');
const second_down = document.querySelector('#secondDown');
// const modal_content = document.querySelector('.modal-content')

$(document).ready(function () {
    setup();
});

function setup(){   
    for(var i = 0; i<50;i++){
        var newOption = document.createElement('option');
        newOption.value = i+1;
        newOption.innerHTML = i+1;
        second_down.appendChild(newOption);
    }
}

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

    // $('.modal').modal('show');

    // modal_content.innerHTML = '<div class="text-center my-auto"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>';

    // setTimeout(function(){
    //     modal_content.innerHTML = '<div class="modal-header"><h4 class="modal-title">Result</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"> Result : ' + result + '<br>' + 'Total : '+ total + '<br>' + 'Average : ' + average + '</div><div class="modal-footer"><button type="button" class="btn btn-danger" data-dismiss="modal">Close</button></div>';
    // },3000);

});
