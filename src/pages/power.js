import RootLayout from "@/components/Layouts/RootLayout";
import PowerSupplyUIPage from "@/components/UI/PowerSupply";
import React from "react";

const PowerSupplyPage = ({ power }) => {
  console.log(power);
  return (
    <div>
      <PowerSupplyUIPage power={power} />
    </div>
  );
};

export default PowerSupplyPage;

PowerSupplyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();

  return {
    props: {
      power: data,
    },
    revalidate: 10,
  };
};
