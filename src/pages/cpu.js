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
  try {
    const res = await fetch("http://localhost:5000/category");
    const rawData = await res.text();
    const data = JSON.parse(rawData);

    return {
      props: {
        cpu: data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        cpu: null, // or some default data
      },
      revalidate: 10,
    };
  }
};
