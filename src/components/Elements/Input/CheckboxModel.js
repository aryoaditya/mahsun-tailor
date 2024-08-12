import Checkbox from "./Checkbox";

function CheckboxModel({
  toggleDropdown,
  isOpen,
  modelState,
  handleModelChange,
}) {
  return (
    <div className="select-checkbox">
      <div
        className="flex items-center justify-between select-box w-full h-10 rounded-md px-3 mb-3 border border-primary border-opacity-20 text-sm bg-white text-slate-500 text-opacity-80 font-normal focus:outline-sky-800 focus:outline-1"
        onClick={toggleDropdown}
      >
        {"Pilih model"}
        <img
          className={`w-3 opacity-50 ${isOpen ? "rotate-180" : ""}`}
          src="/assets/icons/dropdown-icon.svg"
          alt="dropdown"
        />
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-col gap-1 px-5 mb-3`}
      >
        <Checkbox
          label={"Jas Pria"}
          checked={modelState.jaspria}
          onChange={() => handleModelChange("jasPria")}
        />
        <Checkbox
          label={"Kebaya"}
          checked={modelState.kebaya}
          onChange={() => handleModelChange("kebaya")}
        />
        <Checkbox
          label={"Dress"}
          checked={modelState.dress}
          onChange={() => handleModelChange("dress")}
        />
        <Checkbox
          label={"Custom"}
          checked={modelState.custom}
          onChange={() => handleModelChange("custom")}
        />
        <Checkbox
          label={"Lainnya"}
          checked={modelState.lainnya}
          onChange={() => handleModelChange("lainnya")}
        />
      </div>
    </div>
  );
}

export default CheckboxModel;
