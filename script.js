$(document).ready(function(){
    $('.error').hide();
    $('.success').hide();
})
$('#button').on('click',function(){
    var product_sku = $('#product_sku').val();
    var product_name = $('#product_name').val();
    var product_price = $('#product_price').val();
    var product_quantity = $('#product_quantity').val();
    if(product_sku = "" ||  product_name == "" || product_price =="" || product_quantity=="" ){
        $('.error').show().fadeOut(5000);
    }else{
        $('.success').show().fadeOut(5000);
    }
})