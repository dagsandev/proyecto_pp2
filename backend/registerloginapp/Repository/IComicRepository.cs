using RegisterLoginApp.Models;

namespace RegisterLoginApp.Repository
{
    public interface IComicRepository
    {
        Task AddComic(ComicModel comic);
        Task<List<ComicModel>> FindAll();
        Task<ComicModel> GetComicById(int id);
    }
}
