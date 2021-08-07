import React from "react";
import { BarLoader } from "react-spinners";
import { styled } from "../../stitches.config";

export type CurrentConnectionState = "loading" | "error" | "empty";

interface props {
  currentConnectionState: CurrentConnectionState;
}

const ConnectionStateDiv = styled("div", {
  padding: 5,
});

const ConnectionState: React.FC<props> = ({ currentConnectionState }) => {
  if (currentConnectionState === "empty") return null;

  return (
    <ConnectionStateDiv>
      {currentConnectionState === "loading" ? (
        <BarLoader loading={true} css="margin: 0 auto; display:block;" />
      ) : (
        "Connection failed! Please, verify the address ❌"
      )}
    </ConnectionStateDiv>
  );
};

export default ConnectionState;
