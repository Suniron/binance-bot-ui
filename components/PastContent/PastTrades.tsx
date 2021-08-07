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

const PastTrades = () => {
  const {
    pastTrades: {
      onSelectedPeriod: { trades },
    },
  } = useAppState();

  if (trades.length === 0) {
    return <Div style="contentBox">No trade on the selected period</Div>;
  }
  return (
    <Div style="contentBox">
      <CardGroup css={{ maxHeight: "400px" }}>
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
    </Div>
  );
};
export default PastTrades;
