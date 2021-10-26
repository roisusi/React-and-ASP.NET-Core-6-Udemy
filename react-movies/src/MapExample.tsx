const MapExample = () => {
  const arr = Array(100).fill(0); //[0,0,0,0....0] X 100
  return (
    <>
      <h1>MapExample</h1>
      <div>Rate this website</div>
      <select
        onChange={(e) => {
          console.log(e.currentTarget.value);
        }}
      >
        {arr.map((number, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </>
  );
};

export default MapExample;
