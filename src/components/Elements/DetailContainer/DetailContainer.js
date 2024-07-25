function DetailContainer(props) {
  const { subtitle, children } = props;
  return (
    <div className=" w-full text-primary">
      <h1 className="text-base font-semibold mb-[6px]">{subtitle}</h1>
      <div className=" flex flex-row min-h-[70px] mb-9 rounded-lg bg-background border border-slate-200 hover:shadow-sm">
        {children}
      </div>
    </div>
  );
}

export default DetailContainer;
