import RootLayout from "@/components/Layouts/RootLayout";
import RamUIPage from "@/components/UI/RamUI";

const RamPage = ({ ram }) => {
  return (
    <div>
      <RamUIPage ram={ram} />
    </div>
  );
};

export default RamPage;

RamPage.getLayout = function getLayout(page) {
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
        ram: data.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        ram: null, // or some default data
      },
      revalidate: 10,
    };
  }
};
