import type { FC } from "react";
import React from "react";
import Layout from "../../Layout";
import { Company, Home, Members, News, Services, Spirit } from "./components";

export const Component: FC = () => {
  return (
    <Layout>
      <Home />
      <Spirit />
      <Services />
      <News />
      <Members />
      <Company />
    </Layout>
  );
}