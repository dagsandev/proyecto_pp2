using Microsoft.AspNetCore.Mvc;
using RegisterLoginApp.Models;
using RegisterLoginApp.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RegisterLoginApp.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
       
        [HttpGet]
        public IActionResult FindAll()
        {
            var users = _userService.FindAll();

            if (users == null || users.Count == 0)
            {
                return NotFound(new { message = "No hay usuarios disponibles." });
            }

            return Ok(users);

        }

        [HttpGet("{id}")]
        public IActionResult GetUserById(int id)
        {

            if (id <= 0)
            {
                return BadRequest(new { message = "El id proporcionado es inválido." });
            }

            var user = _userService.FindById(id);

            if (user == null)
            {                
                return NotFound(new { message = "Usuario no encontrado" });
            }

            return Ok(user);
        }
    }
}
