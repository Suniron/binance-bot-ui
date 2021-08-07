import React, { MouseEvent, useEffect, useState } from "react";
import { useActions } from "../../overmind";
import { addCachedAddress, getCachedAddresses } from "../../utils/cache.utils";

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

  const useLastConnection = (address: string) => {
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
        <button type="button" onClick={handleButtonClick}>
          Connection
        </button>

        {isWsError && <p>Connection failed! Please, verify the address ❌</p>}
        {addressesHistory.length !== 0 ? (
          <>
            <h5>Last connections:</h5>
            <ul>
              {addressesHistory.map((address) => (
                <li
                  style={{ cursor: "pointer" }}
                  key={"address_" + address}
                  onClick={() => useLastConnection(address)}
                >
                  {address.replace("ws://", "")}
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default BackendLinker;
