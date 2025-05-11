import { title } from "process";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

type Props = {
  imageOrder: string;
  textOrder: string;
  title: string;
  linkText: string;
};

const About = ({ imageOrder, linkText, textOrder, title }: Props) => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 1st content */}
        <div className={`${textOrder}`}>
          {/* title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {title}
          </h1>
          {/* list */}
          <div className="mt-8">
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-green-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Pengalaman lebih dari 4 tahun dalam melayani jasa sedot wc
              </p>
            </div>

            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-green-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Dikerjakan oleh tenaga yang ahli dibidangnya
              </p>
            </div>

            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-green-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Armada yang berteknologi baru dan sesuai standart
              </p>
            </div>
            {/* link */}
            <p className="font-semibold text-blue-600 cursor-pointer hover:underline w-fit">
              {linkText}
            </p>
          </div>
        </div>
        {/* image content */}
        <div className={`${imageOrder}`}>
          <Image src="/images/truck.png" alt="image" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default About;
