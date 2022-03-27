const Filter = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
};

export default Filter;
