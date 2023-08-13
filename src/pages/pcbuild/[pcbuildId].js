import RootLayout from "@/components/Layouts/RootLayout";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
import { ArrowLeftOutlined, ProfileOutlined } from "@ant-design/icons";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Select } from "antd";

const PcbuildPage = ({ component }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  console.log(component);

  const onSearch = (value) => console.log(value);

  const handleClick = (id) => {
    const existingBuildInfo = localStorage.getItem("build_info");
    let addedComponent = {};
    if (!existingBuildInfo) {
      addedComponent[id] = 1;
    } else {
      addedComponent = JSON.parse(existingBuildInfo);

      let filteredResult = {};

      for (let singleId in addedComponent) {
        filteredResult = component.filter(
          (singleObj) => singleObj?.id === singleId
        );
        if (filteredResult.length > 0) {
          delete addedComponent[filteredResult[0].id];
          localStorage.setItem("build_info", JSON.stringify(addedComponent));
        }
      }
      if (addedComponent[id]) {
        const newC = addedComponent[id];
        addedComponent[id] = newC;
      } else {
        addedComponent[id] = 1;
      }
    }
    localStorage.setItem("build_info", JSON.stringify(addedComponent));
  };

  return (
    <div className="bg-stone-200 py-10">
      <div className="flex items-center justify-between w-2/3 mx-auto bg-white mb-4 p-4 rounded-md">
        <div className="flex items-center">
          <Link href="/builder" className="flex items-center">
            <ArrowLeftOutlined className="mr-3" />
          </Link>
          <Search placeholder="search" onSearch={onSearch} enterButton />
        </div>
        <div className="flex items-center">
          <p className="mr-2">Sort</p>
          <Select
            defaultValue="Price ( Low > high )"
            style={{
              width: 200,
            }}
            onChange={handleChange}
            options={[
              {
                options: [
                  {
                    label: "Price ( Low > high )",
                    value: "low",
                  },
                  {
                    label: "Price ( Low < high )",
                    value: "high",
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
      {component.map((data) => {
        return (
          <>
            <div
              key={data?.id}
              className="flex items-center justify-between w-2/3 mx-auto bg-white mb-4 p-4 rounded-md"
            >
              <div className="flex items-center space-x-8">
                <div>
                  <Image
                    src={data?.image_url}
                    width={150}
                    height={180}
                    responsive
                    alt="pc component image"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">
                    {data?.title}
                  </h3>
                  {data.key.length > 0 &&
                    data?.key?.map((ke, i) => {
                      return (
                        <>
                          <ul key={i} className="space-y-1">
                            {ke.ports && <li>Ports: {ke.ports}</li>}
                            {ke.features && <li>Features: {ke.features}</li>}
                            {ke.resolution && (
                              <li>Resolution: {ke.resolution}</li>
                            )}
                            {ke.clockspeed && (
                              <li>Clock Speed:{ke.clockspeed}</li>
                            )}
                            {ke.cpu && <li>CPU: {ke.cpu}</li>}
                            {ke.chipset && <li>Chipset: {ke.chipset}</li>}
                            {ke.mpn && <li>MPN: {ke.mpn}</li>}
                            {ke.memory && <li>Memory: {ke.memory}</li>}
                            {ke.interface && <li>Interface: {ke.interface}</li>}
                            {ke.voltage && <li>Voltage: {ke.voltage}</li>}
                            {ke.frequency && <li>Frequency: {ke.frequency}</li>}
                            {ke.capacity && <li>Capacity: {ke.capacity}</li>}
                            {ke.architecture && (
                              <li>Memory Architecture: {ke.architecture}</li>
                            )}
                            {ke.pin && <li>PIN: {ke.pin}</li>}
                            {ke.continuespower && (
                              <li>Continues Power: {ke.continuespower}</li>
                            )}
                            {ke.fan && <li>Fan: {ke.fan}</li>}
                            {ke.atxversion && (
                              <li>ATX Version: {ke.atxversion}</li>
                            )}
                            {ke.efficiencyrating && (
                              <li>Efficiency Rating: {ke.efficiencyrating}</li>
                            )}
                            {ke.storage && <li>Storage: {ke.storage}</li>}
                            {ke.seektime && <li>Seek Time: {ke.seektime}</li>}
                            {ke.buffer && <li>Buffer: {ke.buffer}</li>}
                            {ke.rotationalspeed && (
                              <li>Rotational Speed: {ke.rotationalspeed}</li>
                            )}
                            {ke.cachesize && (
                              <li>Cache Size: {ke.cachesize}</li>
                            )}
                            {ke.display && <li>Display: {ke.display}</li>}
                            {ke.speed && <li>Speed: {ke.speed}</li>}
                            {ke.outside && ke.outside.length > 0 && (
                              <li>
                                <ul className="space-y-3">
                                  {ke.outside.map((item, index) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                              </li>
                            )}
                          </ul>
                        </>
                      );
                    })}
                </div>
              </div>
              <div>
                <h4 className="text-base font-medium mb-3">
                  {data?.price} TK.
                </h4>
                <button
                  onClick={() => handleClick(data?.id)}
                  className="bg-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-700 hover:text-white"
                >
                  Add
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default PcbuildPage;

PcbuildPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/category`);
  const result = await res.json();

  let data = null;

  if (result) {
    data = result.filter((data) => data.category === params.pcbuildId);
  }

  return {
    props: {
      component: data,
    },
  };
};
