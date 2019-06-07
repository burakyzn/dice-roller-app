$(document).ready(function () {
    setup();
});

function setup(){
    var dice_col_height = $('#dice-col').css('height');
    //console.log('dice_col_height : ' + dice_col_height);
    var dice_height = (parseFloat(dice_col_height) - 50) + 'px'; 
    //console.log('dice_height ' + dice_height);
    $('#app-dice').css('font-size', dice_height);

    var title_col_height = $('#title-col').css('height');
    //console.log('title_col_height : ' + title_col_height);
    var title_height = (parseFloat(title_col_height) - 20) + 'px';
    //console.log('title_height : ' + title_height);
    $('#app-title').css('font-size', title_height);
}