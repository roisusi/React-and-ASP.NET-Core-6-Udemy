const SelectNumber = (props: selectNumberProps) => {
  const arr = Array(props.maxValue).fill(0);
  return (
    <>
      <select
        onChange={(e) => {
          console.log(e.currentTarget.value);
          props.onSelected(parseInt(e.currentTarget.value, 10));
        }}
      >
        {arr.map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectNumber;

interface selectNumberProps {
  maxValue: number;
  onSelected(valus: number): void;
}

SelectNumber.defaultProps = {
  maxValue: 5,
};
