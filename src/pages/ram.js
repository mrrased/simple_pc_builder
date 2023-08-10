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
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();

  return {
    props: {
      ram: data,
    },
    revalidate: 10,
  };
};
