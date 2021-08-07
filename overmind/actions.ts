import { Context } from ".";
import { SelectedPeriod } from "./state";

// ===============
// == WEBSOCKET ==
// ===============

/**
 * Try and set ws to the backend. Return **true** if it works. Otherwise, it will be **false**.
 * @param context
 * @param webSocketUrl

 */
export const setBackendWebSocketUrl = ({ state }: Context, wsUrl: string) => {
  state.websocket.url = wsUrl;
};

export const setIsBackendLinked = ({ state }: Context, isLinked: boolean) => {
  state.backend.isLinked = isLinked;
};

export const disconnectBackendSocket = ({ state }: Context) => {
  // reset state
  state.backend.isLinked = false;
  state.websocket.isOpen = false;
  state.websocket.url = undefined;
};

export const onWsMessageHandler = (
  { state }: Context,
  args: { ws: WebSocket; ev: MessageEvent<any> | null }
) => {
  const datas = JSON.parse(args.ev?.data);

  if (datas.type === "latest") {
    state.common = datas.common;
  }
  // console.log(datas);
  console.log();
};

export const onWsErrorHandler = ({ state }: Context, ev: Event) => {
  console.log("TODO: Websocket have an error:", ev);
};

export const onWsCloseHandler = ({ state }: Context, ev: CloseEvent) => {
  console.log("TODO: Websocket was closed:", ev);
};

// =================
// == PAST TRADES ==
// =================

export const changeSelectedPeriod = (
  { state }: Context,
  newPeriod: SelectedPeriod
) => {
  state.pastTrades.selectedPeriod = newPeriod;
};
