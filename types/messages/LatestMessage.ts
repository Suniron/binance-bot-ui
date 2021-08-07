import Common from "../Common";
import Symbol from "../Symbol";

type LatestMessage = {
  type: "latest";
  result: true;
  common: Common;
  configuration: {};
  stats: { symbols: Symbol[] };
};
export default LatestMessage;
