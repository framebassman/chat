using Atata;
using OpenQA.Selenium;
using System.Threading;
using _ = Chat.Tests.Model.MainPage;

namespace Chat.Tests.Model
{
    [Url("")]
    public class MainPage : Page<_>
    {
        [FindById("send")]
        public Button<_> Send { get; private set; }

        public _ LoginAs(string name)
        {
            IAlert alert = Driver.SwitchTo().Alert();
            // alert.SendKeys(name); // Note that SendKeys doesn't work in Chrome for a long time. Works in Firefox for example.
            alert.Accept();

            Driver.SwitchTo().DefaultContent();

            return Owner;
        }
    }
}
