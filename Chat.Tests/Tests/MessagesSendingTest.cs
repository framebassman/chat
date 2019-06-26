using Atata;
using Chat.Tests.Model;
using Xunit;

namespace Chat.Tests.Tests
{
    public class MessagesSendingTest : AbstractUiTest
    {
        [Fact]
        public void SendMessage()
        {
            Go.To<MainPage>()
                .LoginAs("TestUser")
                .Input.Set("just text")
                .Send.Click()
                ;
        }
    }
}