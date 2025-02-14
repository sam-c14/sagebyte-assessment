'use client'
import { FC,Dispatch,SetStateAction } from "react";

interface CheckboxProps {
  checked:boolean;
  index:number;
  setChecked:Dispatch<SetStateAction<boolean[]>>
}

const Checkbox:FC<CheckboxProps> = ({checked, setChecked, index}) => {

  const toggleCheckbox = () => {
    setChecked((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={toggleCheckbox}
      />

      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-300 
          ${
            checked
              ? "border-blue-custom-500 bg-blue-custom-500"
              : "border-[#00000033] bg-white"
          }
        `}
      >
        {checked && (
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 4.67749L4.68225 7.85974L11.0453 1.49524"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

export default Checkbox;
