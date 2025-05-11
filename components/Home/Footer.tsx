import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-blue-600">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-3 grid md:grid-cols-3 lg:grid-cols-3 gap-10">
        {/* part 1 */}
        <div>
          <div className="space-y-5">
            <div className="text-white font-bold text-2xl">
              <h2>AGUS SEDOT WC</h2>
            </div>
            <p className="mt-5 font-semibold text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              voluptas accusantium incidunt. Quis, repellendus veniam? Labore
              sed maxime corporis ipsum, modi harum quasi tempora explicabo
              expedita? Consequuntur sint dolorem placeat.
            </p>
          </div>
          {/* link */}
          <div className="flex items-center text-white space-x-4 mt-6">
            <div className="w-8 h-8 bg-green-600 flex items-center justify-center flex-col rounded-full">
              <FaWhatsapp />
            </div>
            <div className="w-8 h-8 bg-green-600 flex items-center justify-center flex-col rounded-full">
              <FaFacebook />
            </div>
            <div className="w-8 h-8 bg-green-600 flex items-center justify-center flex-col rounded-full">
              <FaInstagram />
            </div>
          </div>
        </div>
        {/* part 2 */}
        <div className="space-y-5">
          <h1 className="text-lg text-white font-bold">Link</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Tentang Kami
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Pelanggan
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Jasa
          </p>
        </div>
        {/* part 3 */}
        <div className="space-y-5">
          <h1 className="text-lg text-white font-bold">Kantor Pusat</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Jl. Raya Ketitang, RT.02/RW.01, Kebayanan 1, Pelem, Kec. Simo,
            Kabupaten Boyolali, Jawa Tengah 57377
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
