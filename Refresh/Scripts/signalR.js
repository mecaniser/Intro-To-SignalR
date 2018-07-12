

//Immediate Invoked Function
(function() {
    var MyHubConn = $.connection.myHub;
    $.connection.hub.start()
        .done(function() {
            print_to_page(" We R connected! ");
            MyHubConn.server.messageAllTime();
        })
        .fail(function() { print_to_page("There is an Error, inspect your code"); });

    MyHubConn.client.MessageReciever = function(message) {
        print_to_page(message);
    }
    var print_to_page = function(message) {
        $("#message2").append(message);
    }
})();