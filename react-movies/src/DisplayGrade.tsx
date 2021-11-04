const DisplayGrade = (props: displayGradeProps) => {
  function display(grade: number) {
    if (grade > 90) {
      return (
        <div>
          <h3>Excellent Job</h3>
        </div>
      );
    } else if (grade <= 90 && grade > 80) {
      return (
        <div>
          <h3>Well Done</h3>
        </div>
      );
    } else if (grade >= 0 && grade <= 80) {
      return (
        <div>
          <h3>Better luck next time</h3>
        </div>
      );
    } else {
      throw "This is impossible";
    }
  }
  return <>{display(props.grade)}</>;
};

export default DisplayGrade;

interface displayGradeProps {
  grade: number;
}
