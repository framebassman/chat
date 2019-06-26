using System;
using Atata;
using Chat.Tests.Model;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;
using Xunit;

namespace Chat.Tests
{
    public class UnitTest1 : IDisposable
    {
        public UnitTest1()
        {
            new DriverManager().SetUpDriver(new ChromeConfig());
            AtataContext.Configure()
                .UseChrome()
                    .WithArguments("--no-sandbox")
                .UseBaseUrl("https://romashov.tech/chat/")
                .Build();
        }
        
        public void Dispose()
        {
            AtataContext.Current?.CleanUp();
        }

        [Fact]
        public void Test1()
        {
            Go.To<MainPage>().
                LoginAs("SomeUser");
        }
    }
}