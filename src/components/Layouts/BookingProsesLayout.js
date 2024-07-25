import BookingPageLayout from "./BookingPageLayout";

function BookingProsesLayout() {
  return (
    <BookingPageLayout title={"Proses Jahit Pesananmu"}>
      <div className="rounded-lg bg-background shadow-md w-full">
        <div className="m-3 min-h-[100px] text-xs flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-bold text-sm text-primary">Jas Pria</p>
            <div className="text-white text-xs px-7 py-1 bg-green_status rounded-full flex">
              <p className="my-auto">5 hari lagi</p>
            </div>
          </div>
          <div className="text-primary px-3 pt-2">
            <table>
              <tr className="text-left align-top">
                <td className="w-28">Estimasi Selesai</td>
                <td>:</td>
                <td className="">18/6/2024</td>
              </tr>
              <tr className="text-left align-top">
                <td>Pengukuran</td>
                <td>:</td>
                <td>Datang ke penjahit, Jumat 18/5/2024</td>
              </tr>
              <tr className="text-left align-top">
                <td>Keterangan</td>
                <td>:</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  eum voluptatem sit? Dolorem at id iure voluptas, est
                  similique, delectus quo quam ratione quis sit minima rerum
                  ipsum non, impedit architecto officia! Itaque est impedit id
                  numquam reprehenderit hic consectetur autem explicabo nobis,
                  optio aut molestias? Accusamus autem ad odit?
                </td>
              </tr>
              <tr className="text-left align-top">
                <td>Total Harga</td>
                <td>:</td>
                <td>Rp. 1.000.000</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </BookingPageLayout>
  );
}

export default BookingProsesLayout;
