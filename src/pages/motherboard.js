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
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();

  return {
    props: {
      motherboard: data,
    },
    revalidate: 10,
  };
};
