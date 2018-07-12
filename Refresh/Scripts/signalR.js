

//Immediate Invoked Function

(function () {
    $.connection.hub.start()
        .done(function () {
            console.log("We have connection, on console!");

            // ReSharper disable once PossiblyUnassignedProperty
            //$.connection.myHub.server.hello(); 
            $.connection.myHub.server.messageAllTime();

        })
        .fail(function () { alert("There is an Error, inspect your code") });

    $.connection.myHub.client.MessageReciever = function (message) {
        $("#message").append(message);
        $("#message2").append(message);
        console.log(message);
    }
})()