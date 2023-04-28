import Head from "next/head";
import Layout from "@/components/layout/Layout/Layout";
import Profile from "@/components/ui/Profile/Profile";
import { GeneralProfile, Match, MatchDetails, WinLose } from "@/types";
import { GetServerSideProps } from "next/types";
import { useEffect, useState } from "react";
const url = "https://api.opendota.com/api";

type Props = {
  profile: GeneralProfile;
  matches: Match[];
  wl: WinLose;
};

export default function ProfilePage({ profile, matches, wl }: Props) {
  
  
  return (
    <>
      <Head>
        <title>Powershot</title>
        <meta name="description" content="Personal Dota helper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Profile
          profile={profile}
          matches={matches}
          wl={wl}
        />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const [profileRes, matchesRes, wlRes] = await Promise.all([
    fetch(`${url}/players/${id}`),
    fetch(`${url}/players/${id}/matches?limit=30&lobby_type=7`),
    fetch(`${url}/players/${id}/wl?lobby_type=7`),
  ]);
  const [profile, matches, wl] = await Promise.all([
    profileRes.json(),
    matchesRes.json(),
    wlRes.json(),
  ]);
  return { props: { profile, matches, wl } };
};
