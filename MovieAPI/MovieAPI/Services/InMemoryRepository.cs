using MoviesAPI.Entities;

namespace MoviesAPI.Services
{
    public class InMemoryRepository : IRepository
    {
        private List<Genre> _genres;
        public InMemoryRepository()
        {
            _genres = new List<Genre>()
            {
                new Genre(){id = 1, Name = "Comedy" },
                new Genre(){id = 2, Name = "Action" },

            };
        }
        public async Task<List<Genre>> GetAllGenres()
        {
            await Task.Delay(3000);
            return _genres;
        }

        public Genre? GetGenreById(int Id)
        {
            return _genres.FirstOrDefault(x => x.id == Id);
        }
        public void AddGenre(Genre genre)
        {
            genre.id = _genres.Max(x => x.id) + 1;
            _genres.Add(genre);
        }
    }
}
