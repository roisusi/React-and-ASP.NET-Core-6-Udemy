using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;
using MoviesAPI.Services;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController] //For Validation
    public class GenresController : ControllerBase
    {
        private readonly IRepository repository;

        public GenresController(IRepository repository)
        {
            this.repository = repository;
        }

        //For both options
        [HttpGet]
        [HttpGet("list")]
        [HttpGet("/allgenres")] //overrride all the api/genres to just /allgenres
        public async Task<List<Genre>> Get()
        {
            return await repository.GetAllGenres();
        }
        ////[HttpGet("example")] //api/genres/example?id=1
        ////[HttpGet("{id}")]      //api/genres/1
        //[HttpGet("{id:int}/{param2=Roi}")] //2 params and strick id to int else we ge 404
        //public IActionResult Get(int id,string param2)
        //{
        //    var genre = repository.GetGenreById(id);

        //    if (genre == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(genre);
        //}

        //[HttpGet("example")] //api/genres/example?id=1
        //[HttpGet("{id}")]      //api/genres/1
        [HttpGet("{id:int}")]
        /*
         * Model Binding
         * [FromBody]
         * [FromHeader]
         * [FromQuery]
         * [FromRoute]
         * [FromForm]
         * [FromServices] from the Dependancy Injection
         */

        /*
         * Model Validation:
         * -Required
         * -Range
         * -StringLength
         */

        public IActionResult Get(int id, [BindRequired] string param2) //BindRequired - must have
        {
            var genre = repository.GetGenreById(id);

            if (genre == null)
            {
                return NotFound();
            }
            return Ok(genre);
        }
        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            return NoContent();
        }
        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {
            return NoContent();
        }
        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }
    }
}
