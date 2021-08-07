import { Context } from ".";

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

export const onWsMessageHandler = (
  { state }: Context,
  args: { ws: WebSocket; ev: MessageEvent<any> | null }
) => {
  const msgDatas = JSON.parse(args.ev?.data);
  // TODO: handle datas
};

export const onWsErrorHandler = ({ state }: Context, ev: Event) => {
  console.log("TODO: Websocket have an error:", ev);
};

export const onWsCloseHandler = ({ state }: Context, ev: CloseEvent) => {
  console.log("TODO: Websocket was closed:", ev);
};
