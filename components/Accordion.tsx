'use client'
import { FC, useState, useEffect, useRef } from "react";
import AngleDown from "./icons/angle-down";

interface AccordionProps {
  title: string;
  disabled?: boolean;
  titleIcon?: FC<any>;
  status: string;
  children: React.ReactNode;
}

const Accordion: FC<AccordionProps> = ({ titleIcon: Icon, disabled, title, children, status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    const updateMaxHeight = () => {
      if (contentRef.current) {
        setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
      }
    };

    updateMaxHeight();

    window.addEventListener("resize", updateMaxHeight);
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, [isOpen]);

  return (
    <div className="border border-[#0000001A] rounded-xl overflow-hidden w-full">
      <header
        className="grid sm:grid-cols-3 grid-cols-[40%_45%_15%] items-center bg-[#FCFCFC] border-b border-[#0000001A] py-4 px-5"
      >
        <div className="flex items-center gap-x-2">
          {Icon && <Icon />}
          <h5 className="font-normal sm:text-[18px] text-sm">{title}</h5>
        </div>
        <h5
          className={`sm:text-base text-sm text-center ${
            disabled ? "text-[#061237]" : "font-semibold text-blue-custom-500"
          }`}
        >
          {status}
        </h5>
        <button
          className="flex items-center justify-end py-3 transition-all"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="accordion-content"
          aria-disabled={disabled}
        >
          <AngleDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </header>

      {/* Content */}
      <div
        ref={contentRef}
        id="accordion-content"
        className="transition-all duration-300 ease-in-out overflow-hidden will-change-[max-height]"
        style={{ maxHeight }}
      >
        <div className="p-4 bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
