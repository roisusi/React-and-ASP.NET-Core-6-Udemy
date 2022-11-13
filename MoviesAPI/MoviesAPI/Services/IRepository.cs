﻿using MoviesAPI.Entities;

namespace MoviesAPI.Services
{
    public interface IRepository
    {
        Task<List<Genre>> GetAllGenres();
        Genre? GetGenreById(int Id);
    }
}
