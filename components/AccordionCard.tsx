'use client'
import { FC, JSX, useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Image from "next/image";

interface AccordionCardProps {
  title: string;
  cardDetails: Array<{ icon?: () => JSX.Element; src?: string; label: string }>;
  hasBorderTop?: boolean;
  hasExtraPaddingTop?: boolean;
  validateSubmission: (state: boolean) => void;
}

const AccordionCard: FC<AccordionCardProps> = ({
  cardDetails,
  title,
  hasBorderTop,
  hasExtraPaddingTop,
  validateSubmission
}) => {
  const [checked, setChecked] = useState(new Array(cardDetails.length).fill(false));

  useEffect(() => {
    validateSubmission(checked.some(value => value));
  }, [checked]);

  return (
    <div
      className={`flex flex-col gap-y-4 xl:pr-36 pr-2 ${hasBorderTop ? "border-t border-[#0000001A]" : ""} ${
        hasExtraPaddingTop ? "pt-5 mt-8" : ""
      }`}
    >
      <h4 className="font-semibold sm:text-base text-sm">{title}</h4>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8">
        {cardDetails.map((detail, index) => (
          <button
            key={detail.label || index}
            className={`border flex justify-between items-center rounded-lg py-4 px-5 ${
              checked[index] ? "border-blue-custom-500" : "border-[#0000001A]"
            }`}
            role="checkbox"
            aria-checked={checked[index]}
            aria-label={`Select ${detail.label}`}
          >
            <span className="flex items-center gap-x-3">
              {detail.icon ? (
                <detail.icon />
              ) : (
                <Image src={detail.src as string} alt={`${detail.label} icon`} />
              )}
              <span className="sm:text-base text-xs">{detail.label}</span>
            </span>
            <Checkbox checked={checked[index]} index={index} setChecked={setChecked} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccordionCard;
