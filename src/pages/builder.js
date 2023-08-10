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
