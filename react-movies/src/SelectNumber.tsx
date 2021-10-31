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
            {props.selectContant(index + 1)}
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
  //control from the parent
  selectContant(value: number): React.ReactNode;
}

SelectNumber.defaultProps = {
  maxValue: 5,
};
