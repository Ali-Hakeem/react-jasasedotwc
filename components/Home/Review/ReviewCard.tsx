import React from "react";
import { BsQuote } from "react-icons/bs";
import Image from "next/image";

type Props = {
  name: string;
  role: string;
  text: string;
};

const ReviewCard = ({ name, role, text }: Props) => {
  return (
    <div>
      <p className="text-center text-gray-800 dark:text-gray-200 text-sm">
        {text}
      </p>
      <div className="mt-6">
        <h1 className="text-lg font-bold text-center mt-4">{name}</h1>
        <h1 className="text-center text-gray-500 dark:text-white">{role}</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
