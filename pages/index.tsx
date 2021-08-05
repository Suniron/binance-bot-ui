import React from "react";
import AccountBalances from "../components/AccountBalances";
import CurrentContent from "../components/CurrentContent";
import Footer from "../components/Footer";
import PastContent from "../components/PastContent";
import Settings from "../components/Settings";
import Layout from "../components/style/Layout";

export default function Home() {
  return (
    <Layout>
      <div style={{ display: "inline-flex" }}>
        <AccountBalances />
        <Settings />
      </div>

      <div style={{ display: "inline-flex" }}>
        <CurrentContent />
        <PastContent />
      </div>
      <Footer />
    </Layout>
  );
}
