using Atata;
using _ = Chat.Tests.Model.MainPage;

namespace Chat.Tests.Model
{
    [Url("")]
    public class MainPage : Page<_>
    {
        [FindById("send")]
        public Button<_> Send { get; private set; }
    }
}
