using RegisterLoginApp.Models;
using RegisterLoginApp.Models.Dto;
using RegisterLoginApp.Repository;

namespace RegisterLoginApp.Services
{
    public class ComicService : IComicService
    {
        private readonly IComicRepository _comicRepository;

        public ComicService(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task AddComic(ComicModel comic)
        {
            await _comicRepository.AddComic(comic);
        }

        public List<ComicResponseDto> FindAll()
        {
            var comics = _comicRepository.FindAll().Result;

            var comicDto = comics.Select(comic => new ComicResponseDto
            {
                Title = comic.Title,
                Genre = comic.Genre,
                File = comic.FilePath
            }).ToList();

            return comicDto;
        }
    }
}
