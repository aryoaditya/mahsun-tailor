function Checkbox({ label, checked, onChange }) {
  return (
    <label className="text-sm">
      <input
        className="mr-2"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default Checkbox;
