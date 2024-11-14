using RegisterLoginApp.Models;
using RegisterLoginApp.Repository;
using BCrypt.Net;

namespace RegisterLoginApp.Services
{
    public class AuthService
    {

        private readonly IUserRepository _userRepository;

        public AuthService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public void Login(string username, string password) 
        {
           var user = _userRepository.GetUserByUsername(username);

            if (user == null)
            {
                throw new InvalidOperationException("Usuario no encontrado");
            }

            if (!VerifyPassword(password, user.password)) 
            {
                throw new InvalidOperationException("Contraseña incorrecta.");
            }
            
        }

        public void Logout() { }

        public void Register(string fullname, string username, string password) 
        {
            if (string.IsNullOrEmpty(fullname) || string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                throw new ArgumentException("Todos los campos son requeridos");
            }

            if (_userRepository.UserExists(username)) 
            {
                throw new InvalidOperationException("El usuario ya existe.");
            }

            string hashedPassword = HashPassword(password);

            var user = new UserModel
            {
                fullname = fullname,
                username = username,
                password = hashedPassword // solo test, hay que encriptar password.
            };

            _userRepository.AddUser(user);
        }

        public static string HashPassword(string password) 
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }

        public static bool VerifyPassword(string password, string storedHash) 
        {
            return BCrypt.Net.BCrypt.Verify(password, storedHash);
        }
    }
}
