'use client'
import React from 'react'
import { sidebarDetails } from '@/app/data';
import ArrowLeft from './icons/arrow-left';
import Nike from './icons/nike';

const Sidebar = () => {
    return <div className='bg-white border-r h-screen py-10 px-5 overflow-y-auto'>
        <button className='flex items-center gap-x-3'>
            <ArrowLeft />
            <span className='font-semibold text-blue-custom-500'>Back to Dashboard</span>
        </button>
        <h2 className='text-2xl font-semibold my-5'>Spring Collection Launch 2025</h2>
        <div><Nike /></div>

        {/* Progress Report */}
        <div className="flex flex-col items-start space-y-6 mt-5">
      {sidebarDetails.map((detail, index) => {
        const IconComponent = detail.icon; // Ensure icon is a component

        return (
          <div key={index} className="flex items-start relative">
            {index !== sidebarDetails.length - 1 && (
              <div className="absolute left-5 top-10 h-full w-1 bg-gray-300 min-h-[30px]" />
            )}

            <div
              className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold z-10"
              style={{ backgroundColor: detail.color || "#7C7C7C" }}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </div>

            <div className="ml-4">
              <p style={{ color: detail.color || "#000" }} className='font-semibold'>{detail.label}</p>

              {detail.extras && (
                <div className="flex gap-2 mt-1 flex-wrap">
                  {detail.extras.map((extra, i) => (
                    <p
                      key={i}
                      className="px-2 py-1 text-[13px] rounded-full"
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
    </div>
}

export default Sidebar