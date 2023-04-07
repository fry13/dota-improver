import Head from "next/head";
import Layout from "@/components/layout/Layout/Layout";
import Search from "@/components/ui/Search/Search";

export default function Home() {
  return (
    <>
      <Head>
        <title>DotaImprover</title>
        <meta name="description" content="Personal Dota helper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Search />
      </Layout>
    </>
  );
}
