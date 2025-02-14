'use client'
import React from "react";
import Accordion from "./Accordion";
import AccordionCard from "./AccordionCard";
import Speaker from "./icons/speaker";
import SearchGreen from './icons/search-green'
import CreditCardOrange from './icons/credit-card-orange'
import { accordionItems } from "@/app/data";

const PlatformSelection = () => {
  const capitalizeFirstLetter = (word:string) => word.charAt(0).toUpperCase() + word.slice(1);

  const parseTitleKey = (key: string) => {
    const keyParts = key.split("_");
    return `${capitalizeFirstLetter(keyParts[0])} ${keyParts[1]}`;
  };

  return (
    <div>
      <h1 className="sm:text-2xl text-xl font-semibold">
        Which platforms would you like to activate for each funnel stage ?
      </h1>
      <p className="sm:text-base text-sm">
        Choose the platforms for each stage to ensure your campaign reaches the
        right audience at the right time.
      </p>
      {/* Accordions */}
      <div className="flex flex-col gap-y-7 mt-10">
      <Accordion
        status="In progress"
        title="Awareness"
        titleIcon={Speaker}
        children={
          <div>
            {Object.keys(accordionItems).map((key) => (
              <AccordionCard
                key={key}
                cardDetails={accordionItems[key as keyof typeof accordionItems]}
                title={parseTitleKey(key)}
                hasBorderTop={!key.includes("social")}
                hasExtraPaddingTop={!key.includes("social")}
              />
            ))}
          </div>
        }
      />
      <Accordion
        status="Not started"
        disabled
        title="Consideration"
        titleIcon={SearchGreen}
        children={
          <div>
            {Object.keys(accordionItems).map((key) => (
              <AccordionCard
                key={key}
                cardDetails={accordionItems[key as keyof typeof accordionItems]}
                title={parseTitleKey(key)}
                hasBorderTop={!key.includes("social")}
                hasExtraPaddingTop={!key.includes("social")}
              />
            ))}
          </div>
        }
      />
      <Accordion
        status="Not started"
        disabled
        title="Conversion"
        titleIcon={CreditCardOrange}
        children={
          <div>
            {Object.keys(accordionItems).map((key) => (
              <AccordionCard
                key={key}
                cardDetails={accordionItems[key as keyof typeof accordionItems]}
                title={parseTitleKey(key)}
                hasBorderTop={!key.includes("social")}
                hasExtraPaddingTop={!key.includes("social")}
              />
            ))}
          </div>
        }
      />
      </div>
    </div>
  );
};

export default PlatformSelection;
