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
        url: '/api/orders',
        success: function(orders) {
            $.each(orders, function(i, order) {
                addOrder(order);
        });
      },
      error: function(){
          alert('error loading');
      }
    });

    $('#"checkout-button-price_1KNVM0EnxayyKJ7ERV1xnI6X"').on('click', function() {

        var order = {
            name: $name.val(),
            contact: $contact.val(),
            info: $info.val(),
            task: $task.val(),
        };

        $.ajax({
            type: 'POST',
            url: '/api/orders',
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

