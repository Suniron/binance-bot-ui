export type SelectedPeriod =
  | "Last hour"
  | "Last day"
  | "Last 3 days"
  | "Last week"
  | "Last month"
  | "All";

export type State = {
  backend: {
    isLinked: boolean;
  };
  websocket: {
    url?: string;
    isOpen: boolean;
  };
  pastTrades: {
    selectedPeriod:
      | "Last hour"
      | "Last day"
      | "Last 3 days"
      | "Last week"
      | "Last month"
      | "All";
  };
};

export const state: State = {
  backend: {
    isLinked: false,
  },
  websocket: {
    url: undefined,
    isOpen: false,
  },
  pastTrades: {
    selectedPeriod: "All",
  },
};
