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
        private readonly ILogger logger;

        public GenresController(IRepository repository, ILogger<Genre>logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        //For both options
        [HttpGet]
        [HttpGet("list")]
        [HttpGet("/allgenres")] //overrride all the api/genres to just /allgenres
        public async Task<List<Genre>> Get()
        {
            logger.LogInformation("Getting all the genrea");
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

        /*
         * Logger hierarchy :
         * Critical
         * Error
         * Warning
         * Information
         * Debug
         * Trace
         */

        public IActionResult Get(int id, [BindRequired] string param2) //BindRequired - must have
        {
            var genre = repository.GetGenreById(id);

            if (genre == null)
            {
                logger.LogWarning($"Genre with id {id} not found");
                return NotFound();
            }
            return NoContent();
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Genre genre)
        {
            repository.AddGenre(genre);
            var data = await repository.GetAllGenres();
            return  Ok(data);
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
