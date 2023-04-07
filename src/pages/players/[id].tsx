import Head from "next/head";
import Layout from "@/components/layout/Layout/Layout";
import Profile from "@/components/ui/Profile/Profile";
import { useRouter } from "next/router";
import { GeneralProfile, User } from "@/types";
import { GetServerSideProps } from "next/types";
const url = "https://api.opendota.com/api";

type Props = {
  data: GeneralProfile;
};

export default function ProfilePage({ data }: Props) {
  //console.log(props);
  return (
    <>
      <Head>
        <title>DotaImprover</title>
        <meta name="description" content="Personal Dota helper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Profile data={data} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${url}/players/${id}`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
};
