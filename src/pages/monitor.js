import RootLayout from "@/components/Layouts/RootLayout";
import MonitorUIPage from "@/components/UI/MonitorUI";

const MonitorPage = ({ monitor }) => {
  return (
    <div>
      <MonitorUIPage monitor={monitor} />
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();

  return {
    props: {
      monitor: data,
    },
    revalidate: 10,
  };
};
