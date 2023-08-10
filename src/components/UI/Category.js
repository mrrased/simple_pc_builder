import Image from "next/image";
import React, { useEffect, useState } from "react";
import Motherboard from "../../../public/images/motherboard.png";
import spyware from "../../../public/images/spyware.png";
import cpu from "../../../public/images/cpu.png";
import storageDevice from "../../../public/images/storage-device.png";
import powerSupply from "../../../public/images/power-supply.png";
import ram from "../../../public/images/ram.png";
import Link from "next/link";

const FeaturedCategory = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "20px",
              margin: "30px 0px",
            }}
          >
            Featured Category
          </h1>
          <div className="grid grid-cols-6 gap-4 justify-center">
            <div className="bg-[#d8dbe2] p-4 hover:bg-[#dfe1e6] hover:cursor-pointer">
              <Image
                src={Motherboard}
                width={50}
                height={50}
                alt="Picture of the author"
                className="mx-auto"
              />
              <Link
                href="/motherboard"
                className="flex justify-center font-semibold hover:text-[#ef4a23] hover:underline hover:cursor-pointer"
              >
                Motherboard
              </Link>
            </div>
            <div className="bg-[#d8dbe2] p-4 hover:bg-[#dfe1e6] hover:cursor-pointer">
              <Image
                src={ram}
                width={50}
                height={50}
                alt="ram"
                className="mx-auto"
              />
              <Link
                href="/ram"
                className="flex justify-center font-semibold hover:text-[#ef4a23]  hover:underline hover:cursor-pointer"
              >
                RAM
              </Link>
            </div>
            <div className="bg-[#d8dbe2] p-4 hover:bg-[#dfe1e6] hover:cursor-pointer">
              <Image
                src={powerSupply}
                width={50}
                height={50}
                alt="power supply"
                className="mx-auto"
              />
              <Link
                href="/power"
                className="flex justify-center font-semibold hover:text-[#ef4a23]  hover:underline hover:cursor-pointer"
              >
                Power Supply Unit
              </Link>
            </div>
            <div className="bg-[#d8dbe2] p-4 hover:bg-[#dfe1e6] hover:cursor-pointer">
              <Image
                src={storageDevice}
                width={50}
                height={50}
                alt="storage device"
                className="mx-auto"
              />
              <Link
                href="/storage"
                className="flex justify-center font-semibold hover:text-[#ef4a23]  hover:underline hover:cursor-pointer"
              >
                Storage Device
              </Link>
            </div>
            <div className="bg-[#d8dbe2] p-4 hover:bg-[#dfe1e6] hover:cursor-pointer">
              <Image
                src={spyware}
                width={50}
                height={50}
                alt="monitor"
                className="mx-auto"
              />
              <Link
                href="/monitor"
                className="flex justify-center font-semibold hover:text-[#ef4a23]  hover:underline hover:cursor-pointer"
              >
                Monitor
              </Link>
            </div>
            <div className="bg-[#d8dbe2] p-4 hover:bg-[#dfe1e6] hover:cursor-pointer">
              <Image
                src={cpu}
                width={50}
                height={50}
                alt="cpu"
                className="mx-auto"
              />
              <Link
                href="/cpu"
                className="flex justify-center font-semibold hover:text-[#ef4a23]  hover:underline hover:cursor-pointer"
              >
                CPU
              </Link>
            </div>
          </div>
        </div>
      ) : (
        "Prerendered"
      )}
    </>
  );
};

export default FeaturedCategory;
