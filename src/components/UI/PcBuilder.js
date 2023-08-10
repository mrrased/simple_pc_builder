import Image from "next/image";
import React from "react";
import cpu from "../../../public/images/cpu.png";
import motherboard from "../../../public/images/motherboard.png";
import powersupply from "../../../public/images/power-supply.png";
import ram from "../../../public/images/ram.png";
import spyware from "../../../public/images/spyware.png";
import storagedevice from "../../../public/images/storage-device.png";
import Link from "next/link";

const PcBuilderPage = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="container py-20">
        <div className="grid grid-rows-6 gap-4 w-3/4 mx-auto border border-yellow-500 bg-white p-4">
          <div className="flex items-center justify-between border-b-4 border-yellow-500 pb-3">
            <div>
              <h3 className="text-lg font-semibold">
                PC Builder - Build Your Own Computer
              </h3>
            </div>
            <div className="flex justify-center">
              <div className="bg-yellow-500 px-6 py-2 rounded-md text-black text-base font-semibold ">
                <p>0 ৳</p>
                <p>0 items</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={cpu}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <h3>CPU</h3>
            </div>
            <Link
              href={`/pcbuild/${"CPU"}`}
              className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
            >
              Choose
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={motherboard}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <h3>Motherboard</h3>
            </div>
            <Link
              href={`/pcbuild/${"motherboard"}`}
              className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
            >
              Choose
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={ram}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <h3>RAM</h3>
            </div>
            <Link
              href={`/pcbuild/${"RAM"}`}
              className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
            >
              Choose
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={powersupply}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <h3>Power Supply Unit</h3>
            </div>
            <Link
              href={`/pcbuild/${"PowerSupply"}`}
              className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
            >
              Choose
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={storagedevice}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <h3>Storage Device</h3>
            </div>
            <Link
              href={`/pcbuild/${"Storage"}`}
              className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
            >
              Choose
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={spyware}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <h3>Monitor</h3>
            </div>
            <Link
              href={`/pcbuild/${"Monitor"}`}
              className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
            >
              Choose
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;
