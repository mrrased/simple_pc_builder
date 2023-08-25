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
  try {
    const res = await fetch(
      "https://pc-builder-server-ot0g.onrender.com/products"
    );
    const rawData = await res.text();
    const data = JSON.parse(rawData);

    return {
      props: {
        monitor: data.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        monitor: null, // or some default data
      },
      revalidate: 10,
    };
  }
};
