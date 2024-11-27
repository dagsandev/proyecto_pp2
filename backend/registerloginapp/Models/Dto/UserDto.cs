using System.ComponentModel.DataAnnotations;

namespace RegisterLoginApp.Models.Dto
{
    public class UserDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Fullname { get; set; }

        [Required]
        public string Username { get; set; }
    }
}
