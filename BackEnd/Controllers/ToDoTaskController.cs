using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
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