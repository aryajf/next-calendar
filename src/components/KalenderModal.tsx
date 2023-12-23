export default function KalenderModal(){
  return (
      <div className="px-10 pt-5 fixed bg-white rounded-xl z-[999] w-[852px] h-[592px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl">
        <div className="flex justify-between">
          <button className="bg-softGray px-11 rounded-full"><i className="text-[20px] fa-solid fa-chevron-left"></i></button>
          <div className="text-primary text-[64px] font-extrabold">2023</div>
          <button className="bg-softGray px-11 rounded-full"><i className="text-[20px] fa-solid fa-chevron-right"></i></button>
        </div>
        <div className="grid grid-cols-4 gap-6 my-8 font-bold">
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">January</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">February</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">March</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">April</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">May</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">June</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">July</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">August</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">September</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">October</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">November</button>
          <button className="bg-softGray px-[29px] py-[31px] rounded-lg text-[28px]">Desember</button>
        </div>
      </div>
  )
}