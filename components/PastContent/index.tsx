import React from "react";
import Div from "../style/Div";
import PastTradesInfos from "./PastTradesInfos";
import PeriodSelector from "./PeriodSelector";

export default function PastContent() {
  return (
    <div>
      <PeriodSelector />
      <PastTradesInfos />
      <Div style="contentBox">Past Trades Charts</Div>
      <Div style="contentBox">Past Trades</Div>
    </div>
  );
}
