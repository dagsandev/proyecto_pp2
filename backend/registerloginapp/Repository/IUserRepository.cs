using RegisterLoginApp.Models;

namespace RegisterLoginApp.Repository
{
    public interface IUserRepository
    {

        bool UserExists(string username);
        void AddUser(UserModel user);
        UserModel GetUserByUsername(string username);
    }
}
