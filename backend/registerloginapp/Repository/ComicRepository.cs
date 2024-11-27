using Microsoft.EntityFrameworkCore;
using RegisterLoginApp.Data;
using RegisterLoginApp.Models;

namespace RegisterLoginApp.Repository
{
    public class ComicRepository : IComicRepository
    {
        private readonly AppDbContext _context;

        public ComicRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task AddComic(ComicModel comic)
        {
            _context.Comics.Add(comic);
            await _context.SaveChangesAsync();
        }

        public async Task<List<ComicModel>> FindAll()
        {
            return await _context.Comics.ToListAsync();
        }

        public async Task<ComicModel> GetComicById(int id)
        {
            return await _context.Comics.FirstOrDefaultAsync(c => c.Id == id);
        }
    }
}
