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
            if (string.IsNullOrEmpty(registerRequest.fullname) || string.IsNullOrEmpty(registerRequest.username) || string.IsNullOrEmpty(registerRequest.password))
            {                
                return BadRequest(new { message = "Todos los campos son obligatorios." });
            }

            try
            {                
                authService.Register(registerRequest.fullname, registerRequest.username, registerRequest.password);

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
            if (string.IsNullOrEmpty(loginRequest.username) || string.IsNullOrEmpty(loginRequest.password))
            {                
                return BadRequest(new { message = "Todos los campos son obligatorios." });
            }

            try
            {
                authService.Login(loginRequest.username, loginRequest.password);

                return Ok(new { message = "Inicio de sesión exitoso." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Hubo un problema al procesar la solicitud.", error = ex.Message });
            }
        }

    }
}
