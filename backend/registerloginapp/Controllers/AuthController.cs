using Microsoft.AspNetCore.Mvc;
using RegisterLoginApp.Models.Dto;
using RegisterLoginApp.Services;




namespace RegisterLoginApp.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly AuthService authService;

        public AuthController(AuthService authService)
        {
            this.authService = authService;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest registerRequest)
        {            
            if (string.IsNullOrEmpty(registerRequest.Fullname) || string.IsNullOrEmpty(registerRequest.Username) || string.IsNullOrEmpty(registerRequest.Password))
            {                
                return BadRequest(new { message = "Todos los campos son obligatorios." });
            }

            try
            {                
                authService.Register(registerRequest.Fullname, registerRequest.Username, registerRequest.Password);

                return Ok(new { message = "Usuario registrado exitosamente." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Hubo un problema al procesar la solicitud.", error = ex.Message });
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest loginRequest)
        {
            if (string.IsNullOrEmpty(loginRequest.Username) || string.IsNullOrEmpty(loginRequest.Password))
            {                
                return BadRequest(new { message = "Todos los campos son obligatorios." });
            }

            try
            {
                authService.Login(loginRequest.Username, loginRequest.Password);

                return Ok(new { message = "Inicio de sesión exitoso." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Hubo un problema al procesar la solicitud.", error = ex.Message });
            }
        }

    }
}
