import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useState, useEffect } from "react";

const FeaturesComponent = ({ products }) => {
  const [randomArray, setRandomArray] = useState([]);

  useEffect(() => {
    const randomizeArray = [...products].sort(() => 0.5 - Math.random());
    setRandomArray(randomizeArray.slice(0, 6));
  }, [products]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "20px",
          margin: "30px 0px",
        }}
      >
        Featured Products
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        className="gap-y-7"
      >
        {randomArray?.map((news) => (
          <Col
            key={news?.id}
            className="gutter-row"
            span={6}
            xs={24}
            sm={8}
            md={8}
            lg={6}
          >
            <Card
              hoverable
              cover={
                <Image
                  src={news?.image_url}
                  width={500}
                  height={200}
                  responsive="true"
                  alt="news image"
                />
              }
            >
              <Link
                href={`/product/${news?._id}`}
                className="flex justify-center font-semibold hover:text-[#ef4a23] hover:underline hover:cursor-pointer"
              >
                {news?.title?.length > 20
                  ? news?.title.slice(0, 50) + "..."
                  : news?.title}
              </Link>
              <p className="mt-2">{news?.category}</p>
              <p className="font-semibold text-2xl mt-1">
                {news?.price}
                <span className="font-semibold text-xl text-[#ef4a23] mx-1">
                  tk.
                </span>
              </p>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span className="text-base text-green-500 font-medium">
                  {news?.status}
                </span>
                <span className="text-base font-medium">
                  rating {news?.rating}
                </span>
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturesComponent;
