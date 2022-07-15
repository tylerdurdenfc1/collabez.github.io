$(function (){

    var $orders = $('#orders');
    var $name = $('#name');
    var $contact = $('#contact');
    var $info = $('#info'); 
    var $idea = $('#idea');

    function addOrder(order) { //DRY the code up with this 
        $orders.append('<li>Name: '+ order.name +', Contact: '+ order.contact +', Info: '+ order.info +', Idea: '+order.idea +'</li>');
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
   
    $('#checkout-button-price_1KNVhSEnxayyKJ7EtFayYlkf').on('click', function() { //button id is chekout-button.... and we want so on click of that make a post
// below are the ids of the fields 
        var order = {
            name: $name.val(),
            contact: $contact.val(),
            info: $info.val(),
            idea: $idea.val(),
        };

        $.ajax({ //post new order to backend - wait for to be successfull - then add new <li> to list on page
            type: 'POST',
            url: 'orders.json',
            data: order, 
            success: function(newOrder) {
                addOrder(newOrder);
            /* BELOW KEEPS GIVING ERROR SAVING ORDER MESSAGE WE DON'T WANT AFTER EACH FORM SUBMISSION},
            error: function () {
                alert('error saving order'); */
            }
        });
    });
});

