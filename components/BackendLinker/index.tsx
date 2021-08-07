import React, { MouseEvent, useEffect, useState } from "react";
import { useActions } from "../../overmind";
import {
  addCachedAddress,
  getCachedAddresses,
  removeCachedAddress,
} from "../../utils/cache.utils";
import { Ul, Li, LiLink, LiIcon } from "../style/ListElements";
import { RiDeleteBin6Line } from "react-icons/ri";

const BackendLinker = () => {
  const [address, setAddress] = useState("");
  const [addressesHistory, setAddressesHistory] = useState<string[]>([]);
  const [isWsError, setIsWsError] = useState(false);
  const { setBackendWebSocketUrl } = useActions();

  useEffect(() => {
    setAddressesHistory(getCachedAddresses());
  }, []);

  /**
   * Try to connect to the websocket URL given by the user
   * @param e
   */
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (address.length <= 8) {
      return window.alert("Address typed is not correct ❌");
    }

    const ws = new WebSocket("ws://" + address);

    // If connection fail:
    ws.onerror = () => {
      setIsWsError(true);
    };

    // If connection works:
    ws.onopen = () => {
      addCachedAddress("ws://" + address);
      setBackendWebSocketUrl("ws://" + address);
    };
  };

  const connectToLastWebsocket = (address: string) => {
    const ws = new WebSocket(address);
    // If connection fail:
    ws.onerror = () => {
      setIsWsError(true);
    };
    // If connection works:
    ws.onopen = () => {
      setBackendWebSocketUrl(address);
    };
  };

  const removeLastWebsocket = (address: string) => {
    removeCachedAddress(address);
    setAddressesHistory(getCachedAddresses());
  };

  return (
    <>
      <h1>Welcome back! 🖐</h1>
      <p>
        You have to enter the IP address or url to your application.
        <br />
        Please, do not forget the port (like 8080):
      </p>
      <div>
        <input
          placeholder="IP address or URL"
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <button onClick={handleButtonClick}>Connection</button>

        {isWsError && <p>Connection failed! Please, verify the address ❌</p>}
        {addressesHistory.length !== 0 ? (
          <>
            <p>Do you want to use a precedent connection?</p>
            <Ul>
              {addressesHistory.map((address) => (
                <Li withIcon key={"address_" + address}>
                  <LiLink onClick={() => connectToLastWebsocket(address)}>
                    {address.replace("ws://", "")}
                  </LiLink>
                  <LiIcon hoverColor="red" position="right">
                    <RiDeleteBin6Line
                      onClick={() => removeLastWebsocket(address)}
                    />
                  </LiIcon>
                </Li>
              ))}
            </Ul>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default BackendLinker;
