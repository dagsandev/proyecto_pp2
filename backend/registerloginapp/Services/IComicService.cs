using RegisterLoginApp.Models;
using RegisterLoginApp.Models.Dto;

namespace RegisterLoginApp.Services
{
    public interface IComicService
    {
        Task AddComic(ComicModel comic);
        List<ComicResponseDto> FindAll();
    }
}
