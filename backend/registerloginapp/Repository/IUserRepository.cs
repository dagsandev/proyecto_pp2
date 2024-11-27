using RegisterLoginApp.Models;

namespace RegisterLoginApp.Repository
{
    public interface IUserRepository
    {

        UserModel GetUserByUsername(string username);
        UserModel GetUserById(int id);
        List<UserModel> FindAll();
        void AddUser(UserModel user);
        bool UserExists(string username);
        
        
    }
}
