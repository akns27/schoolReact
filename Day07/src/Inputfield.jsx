const InputField = ({ label, value, onChange }) => {
  return (
    <div>
      {label}
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
