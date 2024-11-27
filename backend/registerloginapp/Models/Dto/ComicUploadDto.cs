using System.ComponentModel.DataAnnotations;

namespace RegisterLoginApp.Models.Dto
{
    public class ComicUploadDto
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Genre { get; set; }

        [Required]
        public IFormFile File { get; set; }
    }
}
