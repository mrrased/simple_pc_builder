import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const ProductDetails = ({ product }) => {
  return (
    <>
      <Row style={{ marginTop: "80px", alignItems: "center" }}>
        <Col md={6} lg={12}>
          <Image
            alt="example"
            src={product?.image_url}
            width={500}
            height={300}
            responsive
          />
        </Col>
        <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
          <h1 style={{ fontSize: "30px" }}>{product?.title}</h1>

          <div className="space-x-7 mt-3">
            <span className="text-[#808080] font-medium text-base">
              Price:{" "}
              <span className="text-black font-medium text-base">
                {new Intl.NumberFormat("en-BD").format(product?.price)} &#2547;
              </span>
            </span>
            <span
              style={{
                color: "gray",
                fontSize: "16px",
              }}
            >
              status:{" "}
              <span className="text-black font-medium text-sm">
                {product?.status}
              </span>
            </span>
            <span
              style={{
                color: "gray",
                fontSize: "16px",
              }}
            >
              category:{" "}
              <span className="text-black font-medium text-sm">
                {product?.category}
              </span>
            </span>
          </div>
          <p className="mt-2">Brand: {product?.brand}</p>
          <h4 className="text-lg font-medium my-3">Key Features</h4>
          {product.key.length > 0 &&
            product?.key?.map((ke, i) => {
              return (
                <>
                  <ul key={i} className="space-y-3">
                    {ke.model && <li>Model: {ke?.model}</li>}
                    {ke.ports && <li>Ports: {ke.ports}</li>}
                    {ke.features && <li>Features: {ke.features}</li>}
                    {ke.resolution && <li>Resolution: {ke.resolution}</li>}
                    {ke.clockspeed && <li>Clock Speed:{ke.clockspeed}</li>}
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
                    {ke.atxversion && <li>ATX Version: {ke.atxversion}</li>}
                    {ke.efficiencyrating && (
                      <li>Efficiency Rating: {ke.efficiencyrating}</li>
                    )}
                    {ke.storage && <li>Storage: {ke.storage}</li>}
                    {ke.seektime && <li>Seek Time: {ke.seektime}</li>}
                    {ke.buffer && <li>Buffer: {ke.buffer}</li>}
                    {ke.rotationalspeed && (
                      <li>Rotational Speed: {ke.rotationalspeed}</li>
                    )}
                    {ke.cachesize && <li>Cache Size: {ke.cachesize}</li>}
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
          <p className="space-x-4 mt-3">
            <span
              style={{
                color: "gray",
                fontSize: "16px",
              }}
              className="mt-2 bg-slate-300 px-6 py-1 rounded-full text-base font-medium "
            >
              Rating: <span className="text-black">{product?.rating}</span>
            </span>
            <span
              style={{
                color: "gray",
                fontSize: "16px",
              }}
              className="mt-2 bg-slate-300 px-6 py-1 rounded-full text-base font-medium "
            >
              Reviews: <span className="text-black">{product?.reviews}</span>
            </span>
          </p>
        </Col>
      </Row>
      <div
        className="line"
        style={{
          height: "5px",
          margin: "20px 0",
          background: "#000",
          width: "100%",
        }}
      ></div>
      <div className="my-10">
        <h1 className="text-lg font-bold text-black">Description:</h1>
        <p>{product?.description}</p>
      </div>
    </>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/category/${params.productId}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
