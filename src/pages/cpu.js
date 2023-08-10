import RootLayout from "@/components/Layouts/RootLayout";
import CpuUIPage from "@/components/UI/CpuUIPage";

const CpuPage = ({ cpu }) => {
  return (
    <div>
      <CpuUIPage cpu={cpu} />
    </div>
  );
};

export default CpuPage;

CpuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();

  return {
    props: {
      cpu: data,
    },
    revalidate: 10,
  };
};
