import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import SubmitButton from "../Elements/Buttons/SubmitButton";
import PageTitle from "../Elements/Title/PageTitle";
import SecondaryButton from "../Elements/Buttons/SecondaryButton";
import { useEffect, useState } from "react";
import { getPayload } from "../../services/auth.service";
import Checkbox from "../Elements/Checkbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { uploadImage } from "../../services/uploadImage.service";
import { createOrder } from "../../services/order.service";
const token = localStorage.getItem("token");

function BookingFormPageLayout() {
  const [defaultName, setDefaultName] = useState("");
  const [defaultPhone, setDefaultPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState(new Date());
  const [bookingFailed, setBookingFailed] = useState("");
  const [image, setImage] = useState();

  useEffect(() => {
    const payload = getPayload(token);
    setDefaultName(payload.name);
    setDefaultPhone(payload.phone);
    setUserId(payload.userId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedModels = [];
    if (checkedJasPria) selectedModels.push("Jas Pria");
    if (checkedKebaya) selectedModels.push("Kebaya");
    if (checkedDress) selectedModels.push("Dress");
    if (checkedCustom) selectedModels.push("Custom");
    if (checkedLainnya) selectedModels.push("Lainnya");

    const data = {
      userId: userId,
      name: e.target.name.value,
      phone: e.target.phone.value,
      model: selectedModels,
      customerAddress: e.target.address.value,
      city: e.target.city.value,
      zip: e.target.zip.value,
      needMeasurement: e.target.measurement.value,
      measurementLocation: e.target.measurementLocation.value,
      estimatedDate: e.target.estimation.value,
      remarks: e.target.description.value,
    };

    const formData = new FormData();
    formData.append("file", image);

    createOrder(data, (status, res) => {
      if (status) {
        uploadImage(formData, (status, res) => {
          if (status) {
            window.location.href = "/booking/queue/";
          } else {
            setBookingFailed(res);
          }
        });
      } else {
        setBookingFailed(res);
      }
    });
  };

  // Dropdown checkbox
  const [isOpen, setIsOpen] = useState(false);
  const [checkedJasPria, setCheckedJasPria] = useState(false);
  const [checkedKebaya, setCheckedKebaya] = useState(false);
  const [checkedDress, setCheckedDress] = useState(false);
  const [checkedCustom, setCheckedCustom] = useState(false);
  const [checkedLainnya, setCheckedLainnya] = useState(false);

  const handleChangeJasPria = () => {
    setCheckedJasPria(!checkedJasPria);
  };

  const handleChangeKebaya = () => {
    setCheckedKebaya(!checkedKebaya);
  };

  const handleChangeDress = () => {
    setCheckedDress(!checkedDress);
  };

  const handleChangeCustom = () => {
    setCheckedCustom(!checkedCustom);
  };

  const handleChangeLainnya = () => {
    setCheckedLainnya(!checkedLainnya);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex flex-col flex-1 px-7 pb-12 pt-28 min-h-screen items-center bg-background">
      <PageTitle title={"Booking"} />
      {bookingFailed && <p className="text-red-500">{bookingFailed}</p>}
      <div className="w-full">
        <form className="flex flex-col mb-[11px]" onSubmit={handleSubmit}>
          <Label label={"Nama"} htmlFor={"name"} />
          <Input
            type={"text"}
            name={"name"}
            placeholder={"cth: Thoha Mahsun"}
            defaultValue={defaultName}
            onChange={(e) => setDefaultName(e.target.value)}
          />

          <Label label={"Nomor Handphone"} htmlFor={"phone"} />
          <Input
            type={"text"}
            name={"phone"}
            placeholder={"08123123123"}
            defaultValue={defaultPhone}
            onChange={(e) => setDefaultPhone(e.target.value)}
          />

          <div className="select-checkbox">
            <Label
              label={"Model busana apa yang Anda inginkan?"}
              htmlFor={"model"}
            />
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
                checked={checkedJasPria}
                onChange={handleChangeJasPria}
              />
              <Checkbox
                label={"Kebaya"}
                checked={checkedKebaya}
                onChange={handleChangeKebaya}
              />
              <Checkbox
                label={"Dress"}
                checked={checkedDress}
                onChange={handleChangeDress}
              />
              <Checkbox
                label={"Custom"}
                checked={checkedCustom}
                onChange={handleChangeCustom}
              />
              <Checkbox
                label={"Lainnya"}
                checked={checkedLainnya}
                onChange={handleChangeLainnya}
              />
            </div>
          </div>

          <Label label={"Alamat Anda"} htmlFor={"address"} />
          <Input
            type={"text"}
            name={"address"}
            placeholder={"Jalan Pahlawan No.51"}
          />

          <Label label={"Kota"} htmlFor={"city"} />
          <Input type={"text"} name={"city"} placeholder={"Jakarta Timur"} />

          <Label label={"Kode Pos"} htmlFor={"zip"} />
          <Input type={"text"} name={"zip"} placeholder={"13420"} />

          <Label
            label={"Apakah Anda perlu pengukuran?"}
            htmlFor={"measurement"}
          />
          <select
            name="measurement"
            id="measurement"
            className="custom-select w-full h-10 rounded-md px-3 mb-3 border bg-white border-primary border-opacity-20 text-sm text-primary focus:outline-sky-800 focus:outline-1"
          >
            <option value="">Pilih opsi pengukuran</option>
            <option value="0">Tidak, saya punya contoh ukuran</option>
            <option value="1">Ya, saya ingin mengukur</option>
          </select>

          <Label
            label={"Apakah penjahit perlu datang ke rumah Anda?"}
            htmlFor={"measurementLocation"}
          />
          <select
            name="measurementLocation"
            id="measurementLocation"
            className="custom-select w-full h-10 rounded-md px-3 mb-3 border bg-white border-primary border-opacity-20 text-sm text-slate-500 focus:outline-sky-800 focus:outline-1"
          >
            <option value="">Pilih lokasi pengukuran</option>
            <option value="0">Tidak perlu, saya kirim contoh ukuran</option>
            <option value="1">Penjahit datang ke rumah saya</option>
            <option value="2">Saya datang ke penjahit</option>
          </select>

          <Label
            label={"Estimasi tanggal selesai yang Anda harapkan?"}
            htmlFor={"estimation"}
          />
          <DatePicker
            className="w-full h-10 rounded-md px-3 mb-3 border bg-white border-primary border-opacity-20 text-sm text-slate-500 focus:outline-sky-800 focus:outline-1"
            name="estimation"
            selected={date}
            onChange={(date) => setDate(date)}
          />

          <Label label={"Ada referensi model?"} htmlFor={"modelRef"} />
          <div className="flex items-center w-full h-10 rounded-md px-3 mb-3 border bg-white border-primary border-opacity-20 text-sm text-slate-500 focus:outline-sky-800 focus:outline-1">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>

          <Label
            label={"Ada yang ingin kamu deskripsikan?"}
            htmlFor={"description"}
          />
          <textarea
            name="description"
            rows="4"
            id=""
            placeholder="Deskripsikan lebih detail"
            className="w-full align-top rounded-md py-3 px-3 mb-3 border border-primary border-opacity-20 text-sm text-primary focus:outline-sky-800 focus:outline-1"
          />

          <div className="flex justify-end items-center gap-2 text-[13px] mt-8">
            <SecondaryButton name={"Kembali"} route={"/"} />
            <SubmitButton name={"Booking"} />
          </div>
        </form>
      </div>
    </main>
  );
}

export default BookingFormPageLayout;
