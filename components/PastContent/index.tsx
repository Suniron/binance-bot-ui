import React from "react";
import Div from "../style/Div";
import PeriodSelector from "./PeriodSelector";

export default function PastContent() {
  return (
    <div>
      <PeriodSelector />
      <Div style="contentBox">Past Trades Infos</Div>
      <Div style="contentBox">Past Trades Charts</Div>
      <Div style="contentBox">Past Trades</Div>
    </div>
  );
}
