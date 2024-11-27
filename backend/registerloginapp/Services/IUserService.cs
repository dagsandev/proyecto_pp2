using RegisterLoginApp.Models;
using RegisterLoginApp.Models.Dto;

namespace RegisterLoginApp.Services
{
    public interface IUserService
    {

        UserDto FindById(int id);
        UserModel GetUserByUsername(string username);
        List<UserDto> FindAll();
        bool UserExists(string username);
    }
}
