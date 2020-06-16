using Atata;
using Chat.Tests.Integration.Model;
using NUnit.Framework;

namespace Chat.Tests.Integration.Tests
{
    public class MessagesSendingTestFixture : UITestFixture
    {
        [Test]
        public void MessageShouldBeSent()
        {
            Go.To<MainPage>()
                .LoginAs("TestUser")
                .Input.Set("just text")
                .Send.Click()
                ;
        }
    }
}