/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { ReloadOutlined, CloseOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import cpu from "../../../public/images/cpu.png";
import motherboard from "../../../public/images/motherboard.png";
import powersupply from "../../../public/images/power-supply.png";
import ram from "../../../public/images/ram.png";
import spyware from "../../../public/images/spyware.png";
import storagedevice from "../../../public/images/storage-device.png";
import Link from "next/link";
import { Alert, Button, Space } from "antd";

const PcBuilderPage = ({ builder }) => {
  const [result, setResult] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Id = JSON.parse(localStorage.getItem("build_info"));

      let fresult = [];
      for (let singleId in Id) {
        const filteredResult = builder.filter(
          (singleObj) => singleObj?.id === singleId
        );
        fresult.push(filteredResult[0]);
      }
      setResult(fresult);
    }
  }, [builder]);

  useEffect(() => {
    const allCategoriesSelected = [
      "CPU",
      "motherboard",
      "RAM",
      "PowerSupply",
      "Storage",
      "Monitor",
    ].every((category) => result?.some((item) => item.category === category));
    setIsComplete(allCategoriesSelected);
  }, [result]);

  const handleRemove = (ct) => {
    const exist = JSON.parse(localStorage.getItem("build_info"));

    const filteredResult = builder.filter(
      (singleObj) => singleObj?.category === ct
    );

    let singleObj = null;
    for (let singleId in exist) {
      const obj = filteredResult.find(
        (singleObj) => singleObj?.id === singleId
      );
      if (obj) {
        singleObj = obj;
      }
    }

    delete exist[singleObj?.id];

    localStorage.setItem("build_info", JSON.stringify(exist));

    location.reload();
  };

  return (
    <div className="bg-slate-200 min-h-screen">
      <Space direction="vertical" style={{ width: "100%" }}>
        {isSuccess && (
          <Alert
            message="Success build"
            type="success"
            showIcon
            action={
              <Button size="small" type="text">
                UNDO
              </Button>
            }
            closable
          />
        )}
      </Space>
      <div className="container py-20">
        <div className="grid grid-rows-6 gap-4 w-full md:w-3/4 mx-auto border border-yellow-500 bg-white p-4">
          <div className="md:flex items-center justify-between border-b-4 border-yellow-500 pb-3">
            <div>
              <h3 className="text-lg font-semibold">
                PC Builder - Build Your Own Computer
              </h3>
            </div>
            <div className="flex md:space-x-2">
              <div className="flex justify-end mt-4">
                {isComplete && (
                  <button
                    onClick={() => setIsSuccess(true)}
                    className="md:px-6 md:py-3 px-3 py-1 mr-1 md:mr-0 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Complete Build
                  </button>
                )}
              </div>
              <div className="flex justify-center">
                <div className="bg-yellow-500 px-6 py-2 rounded-md text-black text-base font-semibold ">
                  <p>0 ৳</p>
                  <p>0 items</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start lg:items-center space-x-2">
              <Image
                src={cpu}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <div>
                <h3>
                  CPU<span>*</span>
                </h3>
                {result?.length > 0 &&
                result?.some((category) => category.category === "CPU") ? (
                  <h3>
                    {
                      result.find((category) => category.category === "CPU")
                        .title
                    }
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </div>
            {result?.length > 0 &&
            result.some((category) => category.category === "CPU") ? (
              <>
                <div className="lg:flex items-center justify-center lg:space-x-2">
                  <div>
                    <p className="lg:space-x-1">
                      <span>
                        {
                          result.find((category) => category.category === "CPU")
                            .price
                        }
                      </span>
                      <span>TK.</span>
                    </p>
                  </div>
                  <div className="flex items-start md:items-center justify-center space-x-3 px-6 md:py-3">
                    <h3
                      onClick={() => handleRemove("CPU")}
                      className="hover:cursor-pointer "
                    >
                      <CloseOutlined />{" "}
                    </h3>
                    <Link href={`/pcbuild/${"CPU"}`}>
                      <ReloadOutlined />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={`/pcbuild/${"CPU"}`}
                className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
              >
                Choose
              </Link>
            )}
          </div>

          <div className="flex justify-between">
            <div className="flex items-start lg:items-center space-x-2">
              <Image
                src={motherboard}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <div>
                <h3>
                  Motherboard<span>*</span>
                </h3>
                {result?.length > 0 &&
                result.some(
                  (category) => category.category === "motherboard"
                ) ? (
                  <h3>
                    {
                      result.find(
                        (category) => category.category === "motherboard"
                      ).title
                    }
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </div>
            {result?.length > 0 &&
            result.some((category) => category.category === "motherboard") ? (
              <>
                <div className="lg:flex items-center lg:space-x-2">
                  <div>
                    <p className="lg:space-x-1">
                      <span>
                        {
                          result.find(
                            (category) => category.category === "motherboard"
                          ).price
                        }
                      </span>
                      <span>TK.</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-3 px-6 py-3">
                    <h3
                      onClick={() => handleRemove("motherboard")}
                      className="hover:cursor-pointer "
                    >
                      <CloseOutlined />{" "}
                    </h3>
                    <Link href={`/pcbuild/${"motherboard"}`}>
                      <ReloadOutlined />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={`/pcbuild/${"motherboard"}`}
                className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
              >
                Choose
              </Link>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-start lg:items-center space-x-2">
              <Image
                src={ram}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <div>
                <h3>
                  RAM<span>*</span>
                </h3>
                {result?.length > 0 &&
                result.some((category) => category.category === "RAM") ? (
                  <h3>
                    {
                      result.find((category) => category.category === "RAM")
                        .title
                    }
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </div>
            {result?.length > 0 &&
            result.some((category) => category.category === "RAM") ? (
              <>
                <div className="lg:flex items-center lg:space-x-2">
                  <div>
                    <p className="lg:space-x-1">
                      <span>
                        {
                          result.find((category) => category.category === "RAM")
                            .price
                        }
                      </span>
                      <span>TK.</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-3 px-6 py-3">
                    <h3
                      onClick={() => handleRemove("RAM")}
                      className="hover:cursor-pointer "
                    >
                      <CloseOutlined />{" "}
                    </h3>
                    <Link href={`/pcbuild/${"RAM"}`}>
                      <ReloadOutlined />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={`/pcbuild/${"RAM"}`}
                className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
              >
                Choose
              </Link>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-start lg:items-center space-x-2">
              <Image
                src={powersupply}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <div>
                <h3>
                  Power Supply Unit<span>*</span>
                </h3>
                {result?.length > 0 &&
                result.some(
                  (category) => category.category === "PowerSupply"
                ) ? (
                  <h3>
                    {
                      result.find(
                        (category) => category.category === "PowerSupply"
                      ).title
                    }
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </div>
            {result?.length > 0 &&
            result.some((category) => category.category === "PowerSupply") ? (
              <>
                <div className="lg:flex items-center lg:space-x-2">
                  <div>
                    <p className="lg:space-x-1">
                      <span>
                        {
                          result.find(
                            (category) => category.category === "PowerSupply"
                          ).price
                        }
                      </span>
                      <span>TK.</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-3 px-6 py-3">
                    <h3
                      onClick={() => handleRemove("PowerSupply")}
                      className="hover:cursor-pointer "
                    >
                      <CloseOutlined />{" "}
                    </h3>
                    <Link href={`/pcbuild/${"PowerSupply"}`}>
                      <ReloadOutlined />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={`/pcbuild/${"PowerSupply"}`}
                className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
              >
                Choose
              </Link>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-start lg:items-center space-x-2">
              <Image
                src={storagedevice}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <div>
                <h3>
                  Storage Device<span>*</span>
                </h3>
                {result?.length > 0 &&
                result.some((category) => category.category === "Storage") ? (
                  <h3>
                    {
                      result.find((category) => category.category === "Storage")
                        .title
                    }
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </div>
            {result?.length > 0 &&
            result.some((category) => category.category === "Storage") ? (
              <>
                <div className="lg:flex items-center lg:space-x-2">
                  <div>
                    <p className="lg:space-x-1">
                      <span>
                        {
                          result.find(
                            (category) => category.category === "Storage"
                          ).price
                        }
                      </span>
                      <span>TK.</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-3 px-6 py-3">
                    <h3
                      onClick={() => handleRemove("Storage")}
                      className="hover:cursor-pointer "
                    >
                      <CloseOutlined />{" "}
                    </h3>
                    <Link href={`/pcbuild/${"Storage"}`}>
                      <ReloadOutlined />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={`/pcbuild/${"Storage"}`}
                className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
              >
                Choose
              </Link>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-start lg:items-center space-x-2">
              <Image
                src={spyware}
                width={30}
                height={30}
                alt="Picture of the author"
                className="mx-auto"
              />
              <div>
                <h3>
                  Monitor<span>*</span>
                </h3>
                {result?.length > 0 &&
                result.some((category) => category.category === "Monitor") ? (
                  <h3>
                    {
                      result.find((category) => category.category === "Monitor")
                        .title
                    }
                  </h3>
                ) : (
                  ""
                )}
              </div>
            </div>
            {result?.length > 0 &&
            result.some((category) => category.category === "Monitor") ? (
              <>
                <div className="lg:flex items-center lg:space-x-2">
                  <div>
                    <p className="lg:space-x-1">
                      <span>
                        {
                          result.find(
                            (category) => category.category === "Monitor"
                          ).price
                        }
                      </span>
                      <span>TK.</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-3 px-6 py-3">
                    <h3
                      onClick={() => handleRemove("Monitor")}
                      className="hover:cursor-pointer "
                    >
                      <CloseOutlined />{" "}
                    </h3>
                    <Link href={`/pcbuild/${"Monitor"}`}>
                      <ReloadOutlined />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={`/pcbuild/${"Monitor"}`}
                className="px-6 py-3 border border-yellow-400 rounded-md hover:cursor-pointer hover:underline hover:bg-yellow-600 transition duration-700"
              >
                Choose
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;
