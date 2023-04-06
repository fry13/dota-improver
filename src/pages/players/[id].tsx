import Head from "next/head";
import Layout from "@/components/layout/Layout/Layout";

export default function Profile() {
  return (
    <>
      <Head>
        <title>DotaImprover</title>
        <meta name="description" content="Personal Dota helper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>hi</Layout>
    </>
  );
}
