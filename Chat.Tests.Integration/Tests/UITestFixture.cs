using Atata;
using NUnit.Framework;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;

namespace Chat.Tests.Integration.Tests
{
    [TestFixture]
    public class UITestFixture
    {
        [SetUp]
        public void SetUp()
        {
            new DriverManager().SetUpDriver(new ChromeConfig());
            AtataContext.Configure()
                .UseChrome()
                .UseBaseUrl("http://localhost/chat")
                .UseNUnitTestName()
                .AddNUnitTestContextLogging()
                .LogNUnitError()
                .Build();
        }

        [TearDown]
        public void TearDown()
        {
            AtataContext.Current.CleanUp();
        }
    }
}