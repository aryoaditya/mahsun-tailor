function DetailContainerField(props) {
  const { row, value } = props;
  return (
    <div className="flex justify-between text-xs ">
      <p className="text-left w-2/6">{row}</p>
      <p className="text-right font-bold w-4/6">{value}</p>
    </div>
  );
}

export default DetailContainerField;
