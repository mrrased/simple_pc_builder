import RootLayout from "@/components/Layouts/RootLayout";
import PowerSupplyUIPage from "@/components/UI/PowerSupply";
import React from "react";

const PowerSupplyPage = ({ power }) => {
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
  try {
    const res = await fetch(
      "https://pc-builder-server-ot0g.onrender.com/products"
    );
    const rawData = await res.text();
    const data = JSON.parse(rawData);

    return {
      props: {
        power: data.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        power: null, // or some default data
      },
      revalidate: 10,
    };
  }
};
