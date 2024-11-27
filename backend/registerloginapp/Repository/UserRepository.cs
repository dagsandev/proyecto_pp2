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

        public UserModel GetUserById(int id)
        {
            var user = _context.Users
                .FirstOrDefault(x => x.Id == id);            

            if (user == null)
            {
                throw new ArgumentException("Usuario no encontrado");
            }
            else
            {
                return user;
            }
        }

        public UserModel GetUserByUsername(string username)
        {
            var user = _context.Users
                .FirstOrDefault(x => x.Username == username);

            if (user == null)
            {
                throw new ArgumentException("Usuario no encontrado");
            }
            else 
            {
                return user;
            }
        }

        public List<UserModel> FindAll()
        {
            return _context.Users.ToList();
        }

        public bool UserExists(string username)
        {
            return _context.Users.Any(u => u.Username == username);
        }
    }
}
