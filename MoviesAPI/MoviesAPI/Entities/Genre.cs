using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace MoviesAPI.Entities
{
    public class Genre
    {
        public int id { get; set; }
        [Required(ErrorMessage = "Please Provied a Valid {0}")]
        [StringLength(10)]
        public string Name { get; set; }
        [Range(18,120)]
        public int Age { get; set; }
        [CreditCard]
        public string CreditCard { get; set; }
        [Url]
        public string Url {get; set; }

    }
}
