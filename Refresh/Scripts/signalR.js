

//Immediate Invoked Function
(function () {

    var Chat = $.connection.chat;
    //Using logging to log to console while the app is in development 
    $.connection.hub.logging = true;
    $.connection.hub.start()
        .done(function () {
            print_to_page(" We R connected! ");
            $.connection.hub.log("A different way to console log");
        })
        .fail(function () { print_to_page("There is an Error, inspect your code"); });

    Chat.client.MessageReciever = function (message) {
        print_to_page(message);
    }
    var print_to_page = function (message) {
        $("#message2").append(message);
    }
    $("#displayTime").on("click",
        function () {
            //print_to_page(data);
            Chat.server.messageAllTime()
                .done(function (data) {
                    print_to_page(data);
                })
                .fail(function (err) {
                    print_to_page(err);
                });
            console.log("The button works!");
        });
})();