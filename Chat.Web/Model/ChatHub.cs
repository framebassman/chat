using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.SignalR;

namespace Chat.Web.Model
{
    public class ChatHub : Hub
    {
        private readonly ILogger<ChatHub> _log;

        public ChatHub(ILogger<ChatHub> log)
        {
            _log = log;
        }

        public async Task NewMessage(string user, string message)
        {
            _log.LogInformation("User: {@user} send message: {@message}", user, message);
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}