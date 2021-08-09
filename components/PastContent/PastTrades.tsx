import React from "react";
import { parse } from "date-fns";
import { useAppState } from "../../overmind";
import {
  Card,
  CardGroup,
  CardHeader,
  CardInfo,
  CardText,
} from "../style/cardElements";
import Div from "../style/Div";
import { H2 } from "../style/textElements";

const PastTrades = () => {
  const {
    pastTrades: {
      onSelectedPeriod: { trades },
      bySymbol: { all },
    },
  } = useAppState();

  if (trades.length === 0) {
    return <Div style="contentBox">No trade on the selected period</Div>;
  }
  return (
    <Div style="contentBox">
      <H2>By order</H2>
      <CardGroup css={{ maxHeight: "200px", maxWidth: "420px" }}>
        {trades.map((trade) => (
          <Card
            key={`card_${trade.date}${trade.symbol}`}
            borderColor={trade.percent < 0 ? "red" : "green"}
          >
            <CardHeader>{trade.symbol}</CardHeader>
            <CardText>
              {trade.profit.toFixed(4)} ({trade.percent}%)
            </CardText>
            <CardInfo>
              {parse(
                trade.date.replace(" AM", "").replace(" PM", ""),
                "MM/dd/yyyy, HH:mm:ss",
                new Date()
              ).toLocaleString()}
            </CardInfo>
          </Card>
        ))}
      </CardGroup>
      <H2>By symbol</H2>
      <CardGroup css={{ maxHeight: "200px", maxWidth: "420px" }}>
        {all.map((symbol, i) => (
          <Card key={i}>
            <CardHeader>{symbol.name}</CardHeader>
            <CardText css={{ color: "$binanceGreen" }}>
              win: {symbol.winCount}
            </CardText>
            <CardText css={{ color: "$binanceRed" }}>
              lose: {symbol.loseCount}
            </CardText>
            <CardText>neutral: {symbol.neutralCount}</CardText>
          </Card>
        ))}
      </CardGroup>
    </Div>
  );
};
export default PastTrades;
