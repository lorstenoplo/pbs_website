import { Inter } from "next/font/google";
import Layout from "@/components/shared/Layout";
import Head from "next/head";
import HomeHero from "@/components/Home/HomeHero";
import Benefits from "@/components/Home/Benefits";
import SuccessStories from "@/components/Home/SuccessStories";
import Survey from "@/components/Home/Survery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Plant Based Society</title>
      </Head>
      <Layout>
        <HomeHero />
        <Benefits />
        <SuccessStories />
        <Survey />
      </Layout>
    </>
  );
}
