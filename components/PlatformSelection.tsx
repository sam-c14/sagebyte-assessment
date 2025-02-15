'use client'
import { useState } from "react";
import Accordion from "./Accordion";
import AccordionCard from "./AccordionCard";
import { accordionItems, accordions } from "@/app/data";

const PlatformSelection = () => {
  const capitalizeFirstLetter = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);
  
  const [permitSubmission, setPermitSubmission] = useState(
    new Array(accordions.length).fill(false)
  );

  const toggleSubmissionPermit = (state: boolean, index: number) => {
    setPermitSubmission((prev) =>
      prev.map((item, i) => (i === index ? state : item))
    );
  };

  const parseTitleKey = (key: string) => {
    const keyParts = key.split("_");
    return `${capitalizeFirstLetter(keyParts[0])} ${keyParts[1]}`;
  };

  return (
    <section aria-labelledby="platform-selection">
      <h1 id="platform-selection" className="sm:text-2xl text-xl sm:font-semibold font-medium">
        Which platforms would you like to activate for each funnel stage?
      </h1>
      <p className="sm:text-base text-sm mt-5">
        Choose the platforms for each stage to ensure your campaign reaches the
        right audience at the right time.
      </p>

      {/* Accordions */}
      <div className="flex flex-col gap-y-7 mt-10">
        {accordions.map((accordion, index) => (
          <Accordion
            status={accordion.status}
            title={accordion.title}
            titleIcon={accordion.titleIcon}
            disabled={accordion.isDisabled}
            key={accordion.title || index}
          >
            <div>
              {Object.keys(accordionItems).map((key) => (
                <AccordionCard
                  key={key}
                  cardDetails={accordionItems[key as keyof typeof accordionItems]}
                  title={parseTitleKey(key)}
                  hasBorderTop={!key.includes("social")}
                  hasExtraPaddingTop={!key.includes("social")}
                  validateSubmission={(state) => toggleSubmissionPermit(state, index)}
                />
              ))}
              {/* Validate button */}
              <div className="mt-7 flex justify-end pr-5 pb-2">
                <button
                  disabled={!permitSubmission[index]}
                  aria-disabled={!permitSubmission[index]}
                  aria-label={`Validate selection for ${accordion.title}`}
                  className="bg-blue-custom-500 disabled:bg-[#98bbff] py-3 px-9 rounded-xl text-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-custom-500 focus:ring-opacity-50"
                >
                  Validate
                </button>
              </div>
            </div>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default PlatformSelection;

