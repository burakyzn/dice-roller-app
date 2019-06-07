const first_down = document.querySelector('#firstDown');
const second_down = document.querySelector('#secondDown');
const modal_body = document.querySelector('#modal-body')

$(document).ready(function () {
    setup();
});


function setup(){
    // Zar fontunun boyutlarını orantısal olarak ayarladım.
    var dice_col_height = $('#dice-col').css('height');
    //console.log('dice_col_height : ' + dice_col_height);
    var dice_height = (parseFloat(dice_col_height) - 50) + 'px'; 
    //console.log('dice_height ' + dice_height);
    $('#app-dice').css('font-size', dice_height);

    // Uygulama baslıgının boyutlarını orantısal olarak ayarladım.
    var title_col_height = $('#title-col').css('height');
    //console.log('title_col_height : ' + title_col_height);
    var title_height = (parseFloat(title_col_height) - 20) + 'px';
    //console.log('title_height : ' + title_height);
    $('#app-title').css('font-size', title_height);

   
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
    //console.log(number_of_side);
    var number_of_dice = second_down.value;
    //console.log(number_of_dice);

    var result_arr = [];
    
    for(var i=0; i < number_of_dice;i++){
        var random_dice = Math.floor(Math.random() * number_of_side) + 1;
        result_arr.push(random_dice)
    }

    // console.log(result_arr);

    var result = result_arr.join('+');

    //console.log(result);

    var total = 0;
    result_arr.forEach(function(e){
        total += e;
    })

    //console.log(total);

    var average = total / result_arr.length;

    //console.log(average);

    modal_body.innerHTML = 'Result : ' + result + '<br>' + 'Total : '+ total + '<br>' + 'Average : ' + average;

    $('#myModal').modal('show');
});