import React from "react";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useActions } from "../../overmind";

const Disconnector = () => {
  const { disconnectBackendSocket } = useActions();

  const handleDisconnect = () => {
    disconnectBackendSocket();
  };

  return <VscDebugDisconnect onClick={handleDisconnect} />;
};

export default Disconnector;
