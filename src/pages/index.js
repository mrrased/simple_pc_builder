import RootLayout from "@/components/Layouts/RootLayout";
import BannerPage from "@/components/UI/Banner";
import FeaturedCategory from "@/components/UI/Category";
import FeaturesComponent from "@/components/UI/FeaturesComponent";
import dynamic from "next/dynamic";
import Head from "next/head";

export default function HomePage({ products }) {
  const DynamicUI = dynamic(() => import("@/components/UI/Category"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerPage />
      <DynamicUI />
      <FeaturesComponent products={products} />
      <button className="text-red-500 border border-sky-500 px-6 hover:bg-black mt-10">
        submit
      </button>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
