import Head from "next/head";
import Layout from "@/components/layout/Layout/Layout";
import Profile from "@/components/ui/Profile/Profile";
import { useRouter } from "next/router";
import { GeneralProfile, Match, User } from "@/types";
import { GetServerSideProps } from "next/types";
const url = "https://api.opendota.com/api";

type Props = {
  profile: GeneralProfile;
  matches: Match[];
};

export default function ProfilePage({ profile, matches }: Props) {
  return (
    <>
      <Head>
        <title>DotaImprover</title>
        <meta name="description" content="Personal Dota helper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Profile profile={profile} matches={matches} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const [profileRes, matchesRes] = await Promise.all([
    fetch(`${url}/players/${id}`),
    fetch(`${url}/players/${id}/matches?limit=25&lobby_type=7`),
  ]);
  const [profile, matches] = await Promise.all([
    profileRes.json(),
    matchesRes.json(),
  ]);
  return { props: { profile, matches } };
};
