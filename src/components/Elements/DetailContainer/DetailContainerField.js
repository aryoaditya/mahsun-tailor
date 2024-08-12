function DetailContainerField(props) {
  const { row, value } = props;
  return (
    <div className="flex justify-between text-xs ">
      <p className="text-left w-5/12">{row}</p>
      <p className="text-right font-semibold w-7/12">{value}</p>
    </div>
  );
}

export default DetailContainerField;
