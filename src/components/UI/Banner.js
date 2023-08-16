import Image from "next/image";
import img from "../../../public/images/banner.webp";
import bannerRight from "../../../public/images/banner_right.webp";
import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Space } from "antd";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const BannerPage = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="col-span-3 mt-7 ">
        <Image src={img} width={982} height={500} responsive alt="news image" />
      </div>
      <div>
        <div className="flex justify-center bg-orange-200 py-6 mt-7">
          <div>
            <h4 className="text-base font-semibold text-center ">
              Compare Products
            </h4>
            <p className="mb-4 ">Choose Two Products to Compare</p>
            <Space direction="vertical">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                  width: 212,
                }}
              />
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                  width: 212,
                }}
                className="mt-2"
              />
            </Space>
            <br />
            <button className="flex justify-center border-2 border-[#ef4a23] w-full py-2 mt-4 text-base font-medium text-[#ef4a23]">
              View Comparison
            </button>
          </div>
        </div>
        <div className="mt-7">
          <Image
            src={bannerRight}
            width={982}
            height={500}
            responsive
            alt="banner image"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
