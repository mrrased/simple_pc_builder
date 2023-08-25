import RootLayout from "@/components/Layouts/RootLayout";
import MotherboardUiPage from "@/components/UI/MotherboardUi";

const MotherboardPage = ({ motherboard }) => {
  return (
    <div>
      <MotherboardUiPage motherboard={motherboard} />
    </div>
  );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page) {
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
        motherboard: data.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        motherboard: null, // or some default data
      },
      revalidate: 10,
    };
  }
};
