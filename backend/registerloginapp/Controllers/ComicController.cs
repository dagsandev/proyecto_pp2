using Microsoft.AspNetCore.Mvc;
using RegisterLoginApp.Models;
using RegisterLoginApp.Models.Dto;
using RegisterLoginApp.Services;

namespace RegisterLoginApp.Controllers
{
    [Route("api/comics")]
    [ApiController]
    public class ComicController : ControllerBase
    {
        private readonly IComicService _comicService;

        public ComicController(IComicService comicService)
        {
            _comicService = comicService;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadComic([FromForm] ComicUploadDto comicUploadDto)
        {
            if (comicUploadDto.File == null || comicUploadDto.File.Length == 0)
            {
                return BadRequest("No se ha seleccionado ningún archivo.");
            }

            // ruta donde se guardará el archivo
            var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "comics");

            if (!Directory.Exists(uploadPath))
            {
                Directory.CreateDirectory(uploadPath);
            }

            // creamos nombre de archivo (por ejemplo: "comics/1234.pdf")
            var filePath = Path.Combine(uploadPath, comicUploadDto.File.FileName);

            // Guardar el archivo en el servidor
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await comicUploadDto.File.CopyToAsync(fileStream);
            }

            var comic = new ComicModel
            {
                Title = comicUploadDto.Title,
                Genre = comicUploadDto.Genre,
                FilePath = "/comics/" + comicUploadDto.File.FileName
            };

            await _comicService.AddComic(comic);

            return Ok(new { message = "Cómic subido exitosamente." });
        }

        [HttpGet]
        public IActionResult FindAll()
        {
            try
            {
                var comics = _comicService.FindAll();

                if (comics == null || !comics.Any())
                {
                    return NotFound("No se encontraron cómics.");
                }

                return Ok(comics);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    new { message = "Ocurrió un error al obtener el listado de cómics.", error = ex.Message });
            }
        }
    }
}

