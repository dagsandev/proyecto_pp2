using RegisterLoginApp.Data;
using RegisterLoginApp.Models;

namespace RegisterLoginApp.Repository
{
    public class UserRepository : IUserRepository
    {

        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public void AddUser(UserModel user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public UserModel GetUserByUsername(string username)
        {
            var user = _context.Users
                .FirstOrDefault(x => x.username == username);

            if (user == null)
            {
                throw new ArgumentException("Usuario no encontrado");
            }
            else 
            {
                return user;
            }
        }

        public bool UserExists(string username)
        {
            return _context.Users.Any(u => u.username == username);
        }
    }
}
