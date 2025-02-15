import Sidebar from "@/components/Sidebar";
import PlatformSelection from "@/components/PlatformSelection";
import ArrowLeft from "@/components/icons/arrow-left";

export default function Home() {
  return (
    <div className="flex flex-col lg:grid xl:grid-cols-[24%_76%] lg:grid-cols-[30%_70%] h-screen">
      <Sidebar />
      <div className="flex-1 p-4 lg:pt-10 lg:px-14 overflow-y-auto pb-32 no-scrollbar">
        <PlatformSelection />
        <div
          className="bg-white sm:pr-7 pr-5 lg:py-5 py-4 xl:pl-[27%] lg:pl-[32%] md:pl-7 pl-5 flex items-center justify-between my-5 left-0 w-full fixed lg:top-[85%] top-[83%] z-10"
          role="navigation"
        >
          <button
            className="text-white sm:text-base text-sm sm:px-8 px-6 py-3 font-semibold bg-black rounded-xl flex items-center gap-x-3"
            aria-label="Go Back"
          >
            <ArrowLeft color="#fff" />
            <span>Back</span>
          </button>
          <button
            className="text-white sm:text-base text-sm sm:px-8 px-6 py-3.5 font-semibold bg-blue-custom-500 rounded-xl flex items-center gap-x-3"
            aria-label="Continue to next step"
          >
            <span>Continue</span>
            <ArrowLeft color="#fff" className="rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
