using RegisterLoginApp.Data;
using RegisterLoginApp.Models;
using RegisterLoginApp.Models.Dto;
using RegisterLoginApp.Repository;

namespace RegisterLoginApp.Services
{
    public class UserService : IUserService
    {

        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userReposiory)
        {
            _userRepository = userReposiory;
        }

        public UserDto FindById(int id)
        {

            var user = _userRepository.GetUserById(id);

            var userDto = new UserDto
            {
                Id = user.Id,
                Fullname = user.Fullname,
                Username = user.Username
            };

            return userDto;
        }

        public UserModel GetUserByUsername(string username)
        {
            return _userRepository.GetUserByUsername(username);
        }

        public List<UserDto> FindAll()
        {
            var users = _userRepository.FindAll();

            var userDto = users.Select(user => new UserDto
            {
                Id = user.Id,
                Fullname = user.Fullname,
                Username = user.Username
            }).ToList();

            return userDto;
        }

        public bool UserExists(string username)
        {
            return _userRepository.UserExists(username);
        }
    }
}
