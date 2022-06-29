$(function (){

    var $orders = $('#orders');
    var $name = $('#name');
    var $contact = $('#contact');
    var $info = $('#info'); 
    var $task = $('#task');

    function addOrder(order) {
        $orders.append('<li>Name: '+ order.name +', Contact: '+ order.contact +', Info: '+ order.info +', Task: '+order.task +'</li>');
    }
  
    $.ajax({
        type: 'GET',
        url: 'orders.json', //where the information is coming from 
        success: function(orders) {
            $.each(orders, function(i, order) {
                addOrder(order);
            });
        },
        error: function () {
            alert('error saving orders'); //gives error saving orders - how do i make it so only shows when a box is not filled etc.?
        }
    });
   
    $('#checkout-button-price_1KNVM0EnxayyKJ7ERV1xnI6X').on('click', function() { //button id is chekout-button.... and we want so on click of that make a post
// below are the ids of the fields 
        var order = {
            name: $name.val(),
            contact: $contact.val(),
            info: $info.val(),
            task: $task.val(),
        };

        $.ajax({
            type: 'POST',
            url: 'orders.json',
            data: order, 
            success: function(newOrder) {
                addOrder(newOrder);
            },
            error: function () {
                alert('error saving order');
            }
        });
    });
});

