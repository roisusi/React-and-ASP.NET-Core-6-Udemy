using MovieAPI.Validations;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace MoviesAPI.Entities
{
    public class Genre : IValidatableObject
    {
        public int id { get; set; }
        [Required(ErrorMessage = "Please Provied a Valid {0}")]
        [StringLength(10)]
        [FirstLetterUppercase]
        public string Name { get; set; }
        //[Range(18, 120)]
        //public int Age { get; set; }
        //[CreditCard]
        //public string CreditCard { get; set; }
        //[Url]
        //public string Url { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (!string.IsNullOrEmpty(Name)) 
            {
                var firstLetter = Name.ToString()[0].ToString();

                if (firstLetter != firstLetter.ToUpper())
                {
                   yield return new ValidationResult("First letter should be uppercase",new string[] {nameof(Name)});
                }
            }
        }
    }
}
