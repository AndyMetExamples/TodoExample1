using Microsoft.AspNetCore.Mvc;

namespace TodoExample1.Controllers
{
    public class ToDoTask : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}