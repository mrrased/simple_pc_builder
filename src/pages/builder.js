import RootLayout from "@/components/Layouts/RootLayout";
import PcBuilderPage from "@/components/UI/PcBuilder";
import React from "react";

const builder = ({ builder }) => {
  return (
    <div>
      <PcBuilderPage builder={builder} />
    </div>
  );
};

export default builder;

builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-ot0g.onrender.com/products"
  );
  const data = await res.json();

  return {
    props: {
      builder: data.data,
    },
  };
};
