import React from "react";
import Image from "next/image";

const Harga = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col bg-red-600 bg_clip_harga mt-5">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/*image */}
        <div className="mx-auto hidden xl:block">
          <Image src="/images/truck.png" alt="image" width={700} height={700} />
        </div>
        {/** */}
        <div>
          {/* heading*/}
          <h3 className="text-3xl md:text-4xl text-white lg:text-5xl mb-6 font-bold leading-[2.5rem] md:leading-[3.5rem]">
            Jasa Harga Sedot WC termurah di Solo raya.
          </h3>
          {/** desc */}
          <h5 className="text-xs sm:text-sm md:text-base font-medium text-gray-200">
            Harga jasa sedot WC bervariasi, faktor yang mempengaruhi biaya :
            <li className="ml-5">
              Ukuran septic tank: Semakin besar, semakin mahal.
            </li>
            <li className="ml-5">
              Lokasi geografis: Biaya lebih tinggi di kota besar.
            </li>
            <li className="ml-5">
              Aksesibilitas: Akses sulit dapat meningkatkan biaya.
            </li>
            <li className="ml-5">
              Jenis layanan: Penyedotan lumpur, tinja, atau pembebasan sumbatan
              mempengaruhi harga.
            </li>
            <p className="mt-3 font-bold">
              Anda dapat berkonsultasi secara gratis terkait keluhan/kebutuhan
              anda. Silahkan klik tombol dibawah ini
            </p>
          </h5>
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* btn */}
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-700 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Hubungi Kami
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Harga;
