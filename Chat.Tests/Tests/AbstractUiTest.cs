using System;
using Atata;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;

namespace Chat.Tests.Tests
{
    public class AbstractUiTest : IDisposable
    {
        public AbstractUiTest()
        {
            new DriverManager().SetUpDriver(new ChromeConfig());
            AtataContext.Configure()
                .UseChrome()
                .UseBaseUrl("http://localhost:5000")
                .Build();
        }
        
        public void Dispose()
        {
            AtataContext.Current?.CleanUp();
        }
    }
}