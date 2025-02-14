'use client'
import { FC, JSX, useState } from "react";
import Checkbox from "./Checkbox";
import Image from "next/image"

interface AccordionCardProps {
  title: string;
  cardDetails: Array<{ icon?: () => JSX.Element; src?: string; label: string }>;
  hasBorderTop?: boolean;
  hasExtraPaddingTop?: boolean;
}

const AccordionCard: FC<AccordionCardProps> = ({
  cardDetails,
  title,
  hasBorderTop,
  hasExtraPaddingTop,
}) => {
  const [checked, setChecked] = useState(new Array(cardDetails.length).fill(false))

  return (
    <div
      className={`flex flex-col gap-y-4 pr-36 ${
        hasBorderTop && "border-t border-[#0000001A]"
      } ${hasExtraPaddingTop && "pt-5 mt-8"}`}
    >
      <h4 className="font-semibold">{title}</h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8">
        {cardDetails.map((detail, index) => (
          <button
            key={detail.label}
            className={`border flex justify-between items-center rounded-lg py-4 px-5 ${checked[index] ? 'border-blue-custom-500' : "border-[#0000001A]"}`}
          >
            <span className="flex items-center gap-x-3">
            {detail.icon ? <detail.icon /> : <Image src={detail.src as string} alt="img-logo" />}
            <span>{detail.label}</span>
            </span>
            <Checkbox checked={checked[index]} index={index} setChecked={setChecked} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccordionCard;
