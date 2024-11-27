using System.ComponentModel.DataAnnotations;

namespace RegisterLoginApp.Models.Dto
{
    public class RegisterRequest
    {
        [Required]
        public string Fullname { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
