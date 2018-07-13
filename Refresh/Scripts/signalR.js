

//Immediate Invoked Function
(function () {

    $("#displayTime").on("click",
        function() {
            //print_to_page(data);
            MyHubConn.server.messageAllTime()
                .done(function (data) {
                    print_to_page(data);
                })
                .fail(function (err) {
                    print_to_page(err);
                });
            console.log("The button works!");
        });

    var MyHubConn = $.connection.myHub;
    $.connection.hub.start()
        .done(function () {
            print_to_page(" We R connected! ");
            
        })
        .fail(function () { print_to_page("There is an Error, inspect your code"); });

    MyHubConn.client.MessageReciever = function (message) {
        print_to_page(message);
    }
    var print_to_page = function (message) {
        $("#message2").append(message);
    }
})();