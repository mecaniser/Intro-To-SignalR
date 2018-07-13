using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Refresh
{
    [HubName("chat")]
    public class ChatHub : Hub
    {
        //public void Hello() => Clients.All.MessageReciever(DateTime.Now);

        public void MessageAllTime() => Clients.Caller.MessageReciever(DateTime.Today);

        //public void DateTimeServer() => Clients.Caller.DisplayDateTime(DateTime.Now);
    }
}