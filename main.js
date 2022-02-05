$(function (){

    var $orders = $('#orders');
    var $name = $('#name');
    var $contact = $('#contact');
    var $info = $('#info');
    var $task = $('#task');

    function addOrder(order) {
        $orders.append('<li>Name: '+ order.name +', Contact: '+ order.contact +', Info: '+ order.info +', Task: '+order.task +'</li>');
    }

   
    $('#checkout-button-price_1KNVM0EnxayyKJ7ERV1xnI6X').on('click', function() {

        var order = {
            name: $name.val(),
            contact: $contact.val(),
            info: $info.val(),
            task: $task.val(),
        };

        $.ajax({
            type: 'POST',
            url: 'https://webhook.site/7b4db931-e34a-40ae-85bd-ddbdd2279df2',
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

