// import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import PlatformSelection from "@/components/PlatformSelection";

export default function Home() {
  return (
    <div className="grid grid-cols-[25%_75%]">
      <Sidebar />
      <div className="py-10 px-12">
      <PlatformSelection />
      </div>
    </div>
  );
}
