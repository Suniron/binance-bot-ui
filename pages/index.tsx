import React from "react";
import AccountBalances from "../components/AccountBalances";
import BackendLinker from "../components/BackendLinker";
import CurrentContent from "../components/CurrentContent";
import Footer from "../components/Footer";
import PastContent from "../components/PastContent";
import Settings from "../components/Settings";
import Layout from "../components/style/Layout";
import { useActions, useAppState } from "../overmind";

export default function Home() {
  const state = useAppState();
  const actions = useActions();

  if (state.websocket.url && !state.backend.isLinked) {
    const ws = new WebSocket(state.websocket.url);

    let sendInterval: NodeJS.Timer;

    // Attach handlers:
    ws.onmessage = (ev) => {
      actions.onWsMessageHandler({ ws, ev });
    };

    ws.onerror = (ev) => actions.onWsErrorHandler(ev);

    ws.onclose = () => {
      actions.disconnectBackendSocket();
      // Close interval if needed:
      if (sendInterval) {
        clearInterval(sendInterval);
      }
    };

    ws.onopen = () => {
      // Enable auto-update, every second:
      sendInterval = setInterval(
        () => ws.send(JSON.stringify({ command: "latest" })),
        1000
      );
    };

    actions.setIsBackendLinked(true);
  }

  if (!state.backend.isLinked) {
    // If connection to websocket is needed:
    return (
      <Layout>
        <BackendLinker />
      </Layout>
    );
  }

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
