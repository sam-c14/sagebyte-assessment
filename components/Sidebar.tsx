"use client";
import React, { useState } from "react";
import { sidebarDetails } from "@/app/data";
import ArrowLeft from "./icons/arrow-left";
import Nike from "./icons/nike";
import Menu from "./icons/menu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden flex items-center gap-x-2 p-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle sidebar menu"
      >
        <Menu className="w-6 h-6" aria-hidden="true" />
        <span className="font-semibold">Menu</span>
      </button>

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 w-80 bg-white border-r h-screen py-10 px-5 overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-full z-20 no-scrollbar`}
        role="navigation"
        aria-label="Sidebar navigation"
      >
        <button
          className="lg:hidden absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          <span aria-hidden="true">✕</span>
        </button>

        <button className="flex items-center gap-x-3" aria-label="Go back to Dashboard">
          <ArrowLeft aria-hidden="true" />
          <span className="sm:font-semibold font-medium text-blue-custom-500">
            Back to Dashboard
          </span>
        </button>

        <h1 className="sm:text-2xl text-lg sm:font-semibold font-medium mt-5">
          Spring Collection Launch 2025
        </h1>

        <div className="mt-2 mb-6">
          <Nike aria-hidden="true" />
        </div>

        <div className="flex flex-col items-start relative mt-5">
          {sidebarDetails.map((detail, index) => {
            const IconComponent = detail.icon;
            const topSpacing = index < 3 ? "mt-3" : "mt-12";

            return (
              <div key={index} className={`flex items-start relative ${topSpacing}`}>
                {/* Connector Line (Ensures uniform length & spacing) */}
                {index !== sidebarDetails.length - 1 && (
                  <div
                    className="absolute left-[18px] top-10 w-[4px] bg-gray-300"
                    style={{
                      height: "80px",
                      backgroundColor: detail.connector ?? "#DCDCDC",
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold z-10"
                  style={{ backgroundColor: detail.color || "#DCDCDC" }}
                  role="img"
                  aria-label={detail.label}
                >
                  <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

                {/* Text Content */}
                <div className="ml-4 mt-2">
                  <p
                    style={{ color: detail.color || "#7C7C7C" }}
                    className="sm:font-semibold font-medium sm:text-base text-sm"
                  >
                    {detail.label}
                  </p>

                  {detail.extras && (
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {detail.extras.map((extra, i) => (
                        <p
                          key={i}
                          className="px-2 py-1 sm:text-[13px] font-medium text-[10px] rounded-full border border-[#0000000A]"
                          style={{
                            backgroundColor: detail.extrasColor || "#E0E0E0",
                            color: detail.color || "#000",
                          }}
                        >
                          {extra}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
