import AboutHero from "@/components/About/AboutHero";
import Team from "@/components/About/Team";
import Layout from "@/components/shared/Layout";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Plant Based Society</title>
      </Head>
      <Layout>
        <AboutHero />
        <Team />
      </Layout>
    </>
  );
};

export default about;
