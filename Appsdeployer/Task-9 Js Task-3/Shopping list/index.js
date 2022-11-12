$(document).ready(function(){
    Update();
    $('.qty, .price').on('keyup keypress blur change',
    function(e){
        Update();
    });
});
function Update(){
    var Sum = 0.0;
    $('#myTable > tbody > tr').each(function(){
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty * price);
        Sum += amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(Sum);
}

var Increament;
var Decreament;
var Plus = $(".cart-qty-plus");
var Minus = $(".cart-qty-minus");
var Increament = Plus.click(function(){
    var n = $(this).parent(".button-container").find(".qty");
    n.val(Number(n.val()) + 1);
    Update();
});


var Decreament = Minus.click(function(){
    var n = $(this).parent(".button-container").find(".qty");
    var QtyVal = Number(n.val());
    if(QtyVal > 0){
        n.val(QtyVal - 1);
    }
    Update();
})