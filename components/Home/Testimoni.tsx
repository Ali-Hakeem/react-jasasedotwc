import { title } from "process";
import React from "react";
import { IoMdChatbubbles } from "react-icons/io";
import {
  MdAttachMoney,
  MdBarChart,
  MdCalendarMonth,
  MdCardTravel,
  MdChatBubble,
  MdCleaningServices,
  MdConstruction,
  MdCorporateFare,
  MdDeliveryDining,
  MdFastForward,
  MdFireTruck,
  MdOutlineMoney,
  MdOutlineMoneyOff,
  MdPhoneEnabled,
  MdSupervisedUserCircle,
  MdTraffic,
  MdVoiceChat,
} from "react-icons/md";

const featureData = [
  {
    title: "Cepat",
    description:
      "Learn how to build a responsive product landing page using Next.js 15,",
    icon: <MdFireTruck className="w-12 h-12 text-red-500 mx-auto" />,
  },

  {
    title: "Bersih",
    description:
      "Learn how to build a responsive product landing page using Next.js 15,",
    icon: <MdCleaningServices className="w-12 h-12 text-red-500 mx-auto" />,
  },

  {
    title: "Responsive",
    description:
      "Learn how to build a responsive product landing page using Next.js 15,",
    icon: <IoMdChatbubbles className="w-12 h-12 text-red-500 mx-auto" />,
  },

  {
    title: "Profesional",
    description:
      "Learn how to build a responsive product landing page using Next.js 15,",
    icon: <MdSupervisedUserCircle className="w-12 h-12 text-red-500 mx-auto" />,
  },

  {
    title: "Berpengalaman",
    description:
      "Learn how to build a responsive product landing page using Next.js 15,",
    icon: <MdCalendarMonth className="w-12 h-12 text-red-500 mx-auto" />,
  },

  {
    title: "Terjangkau",
    description:
      "Learn how to build a responsive product landing page using Next.js 15,",
    icon: <MdOutlineMoney className="w-12 h-12 text-red-500 mx-auto" />,
  },
];

const Testimoni = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featureData.map((featureData, index) => {
          return (
            <div key={index} className="text-center mx-auto">
              {/* icon */}
              <div className="mx-auto text-center">{featureData.icon}</div>
              {/* title */}
              <h1 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {featureData.title}
              </h1>
              {/** desc */}
              <p className="text-sm text-gray-900 dark:text-white">
                {featureData.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimoni;
