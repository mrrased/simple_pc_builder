import RootLayout from "@/components/Layouts/RootLayout";
import StorageDeviceUiPage from "@/components/UI/StorageDeviceUi";

const StorageDevicePage = ({ storage }) => {
  return (
    <div>
      <StorageDeviceUiPage storage={storage} />
    </div>
  );
};

export default StorageDevicePage;

StorageDevicePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();

  return {
    props: {
      storage: data,
    },
    revalidate: 10,
  };
};
