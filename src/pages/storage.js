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
  try {
    const res = await fetch(
      "https://pc-builder-server-ot0g.onrender.com/products"
    );
    const rawData = await res.text();
    const data = JSON.parse(rawData);

    return {
      props: {
        storage: data.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        storage: null, // or some default data
      },
      revalidate: 10,
    };
  }
};
