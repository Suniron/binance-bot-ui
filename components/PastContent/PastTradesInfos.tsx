import React from "react";
import { useAppState } from "../../overmind";
import Div from "../style/Div";
import { Table, TBody, Td, Th, THead, Tr } from "../style/tableElements";

const PastTradesInfos = () => {
  const {
    pastTrades: { onSelectedPeriod },
  } = useAppState();

  return (
    <Div style="contentBox">
      <Table>
        <THead>
          <Tr>
            <Th></Th>
            <Th>Value</Th>
            <Th>%</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr color="green">
            <Td>Won</Td>
            <Td>{onSelectedPeriod.won.length}</Td>
            <Td>{(onSelectedPeriod.wonRatio * 100).toFixed(1)}</Td>
          </Tr>
          <Tr color="red">
            <Td>Lost</Td>
            <Td>{onSelectedPeriod.lost.length}</Td>
            <Td>{(onSelectedPeriod.lostRatio * 100).toFixed(1)}</Td>
          </Tr>
          <Tr>
            <Td>Neutral</Td>
            <Td>{onSelectedPeriod.neutral.length * 100}</Td>
            <Td>{(onSelectedPeriod.neutralRatio * 100).toFixed(1)}</Td>
          </Tr>
          <Tr bold>
            <Td>Total</Td>
            <Td>{onSelectedPeriod.trades.length}</Td>
            <Td>100</Td>
          </Tr>
        </TBody>
      </Table>
    </Div>
  );
};

export default PastTradesInfos;
