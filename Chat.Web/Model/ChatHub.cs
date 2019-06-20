using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Chat.Web.Model
{
    public class ChatHub : Hub
    {
        public async Task NewMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}