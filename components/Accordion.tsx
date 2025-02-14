'use client'
import { FC, useState, useEffect, useRef } from "react";
import AngleDown from "./icons/angle-down";

interface AccordionProps {
  title: string;
  disabled?:boolean
  titleIcon?: FC<any>;
  status: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  titleIcon: Icon,
  disabled,
  title,
  children,
  status,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border rounded-2xl overflow-hidden w-full">
      <header className="flex justify-between items-center bg-[#FCFCFC] py-4 px-5 rounded-ss-lg rounded-es-lg">
        <div className="flex items-center gap-x-2">
          {Icon && <Icon />}
          <h5 className="font-normal text-[18px]">{title}</h5>
        </div>
        <h5 className={`font-semibold ${disabled ? 'text-gray-300' : 'text-blue-custom-500'}`}>{status}</h5>
        <button
          className="flex items-center justify-between px-4 py-3 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AngleDown
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </header>

      {/* Content */}
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight }}
      >
        <div className="p-4 bg-white">{children}</div>
        {/* Validate button */}
        <div className="mt-4 flex justify-end pr-5 pb-4">
          <button className="bg-blue-custom-500 py-3 px-9 rounded-xl text-white">
            Validate
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Accordion;
