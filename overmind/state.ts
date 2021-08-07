import { parse } from "date-fns";
import millisecondsToHours from "date-fns/millisecondsToHours";
import { derived } from "overmind";
import { Context } from ".";
import Common from "../types/Common";
import PastTrade from "../types/PastTrade";

export type SelectedPeriod =
  | "Last hour"
  | "Last 6 hours"
  | "Last 12 hours"
  | "Last day"
  | "Last 3 days"
  | "Last 7 days"
  | "Last 30 days"
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
      | "Last 6 hours"
      | "Last 12 hours"
      | "Last day"
      | "Last 3 days"
      | "Last 7 days"
      | "Last 30 days"
      | "All";
    onSelectedPeriod: {
      trades: PastTrade[];
      won: PastTrade[];
      wonRatio: number;
      lost: PastTrade[];
      lostRatio: number;
      neutral: PastTrade[];
      neutralRatio: number;
    };
  };
  common?: Common;
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
    onSelectedPeriod: {
      trades: derived((state: State, rootState: Context["state"]) => {
        if (!rootState.common) return [];

        switch (rootState.pastTrades.selectedPeriod) {
          case "Last hour":
            return rootState.common.pastTrades.filter(
              (pt) =>
                millisecondsToHours(
                  Math.abs(
                    parse(
                      pt.date.replace(" AM", "").replace(" PM", ""),
                      "MM/dd/yyyy, HH:mm:ss",
                      new Date()
                    ).getTime() - new Date().getTime()
                  )
                ) < 1
            );
          case "Last 6 hours":
            return rootState.common.pastTrades.filter(
              (pt) =>
                millisecondsToHours(
                  Math.abs(
                    parse(
                      pt.date.replace(" AM", "").replace(" PM", ""),
                      "MM/dd/yyyy, HH:mm:ss",
                      new Date()
                    ).getTime() - new Date().getTime()
                  )
                ) < 6
            );
          case "Last 12 hours":
            return rootState.common.pastTrades.filter(
              (pt) =>
                millisecondsToHours(
                  Math.abs(
                    parse(
                      pt.date.replace(" AM", "").replace(" PM", ""),
                      "MM/dd/yyyy, HH:mm:ss",
                      new Date()
                    ).getTime() - new Date().getTime()
                  )
                ) < 12
            );

          case "Last day":
            return rootState.common.pastTrades.filter(
              (pt) =>
                millisecondsToHours(
                  Math.abs(
                    parse(
                      pt.date.replace(" AM", "").replace(" PM", ""),
                      "MM/dd/yyyy, HH:mm:ss",
                      new Date()
                    ).getTime() - new Date().getTime()
                  )
                ) /
                  24 <
                1
            );

          case "Last 3 days":
            return rootState.common.pastTrades.filter(
              (pt) =>
                millisecondsToHours(
                  Math.abs(
                    parse(
                      pt.date.replace(" AM", "").replace(" PM", ""),
                      "MM/dd/yyyy, HH:mm:ss",
                      new Date()
                    ).getTime() - new Date().getTime()
                  )
                ) /
                  24 <
                3
            );

          case "Last 7 days":
            return rootState.common.pastTrades.filter(
              (pt) =>
                millisecondsToHours(
                  Math.abs(
                    parse(
                      pt.date.replace(" AM", "").replace(" PM", ""),
                      "MM/dd/yyyy, HH:mm:ss",
                      new Date()
                    ).getTime() - new Date().getTime()
                  )
                ) /
                  24 <
                7
            );

          case "Last 30 days":
            return rootState.common.pastTrades.filter(
              (pt) =>
                millisecondsToHours(
                  Math.abs(
                    parse(
                      pt.date.replace(" AM", "").replace(" PM", ""),
                      "MM/dd/yyyy, HH:mm:ss",
                      new Date()
                    ).getTime() - new Date().getTime()
                  )
                ) /
                  24 <
                30
            );

          case "All":
          default:
            return rootState.common.pastTrades;
        }
      }),
      won: derived((state: State, rootState: Context["state"]) => {
        if (!rootState.common) return [];
        return rootState.pastTrades.onSelectedPeriod.trades.filter(
          (pt) => pt.profit > 0
        );
      }),
      wonRatio: derived((state: State, rootState: Context["state"]) => {
        if (!rootState.common) return 0;
        if (rootState.pastTrades.onSelectedPeriod.trades.length === 0) return 0;
        return (
          rootState.pastTrades.onSelectedPeriod.won.length /
          rootState.pastTrades.onSelectedPeriod.trades.length
        );
      }),
      lost: derived((state: State, rootState: Context["state"]) => {
        if (!rootState.common) return [];
        return rootState.pastTrades.onSelectedPeriod.trades.filter(
          (pt) => pt.profit < 0
        );
      }),
      lostRatio: derived((state: State, rootState: Context["state"]) => {
        if (!rootState.common) return 0;
        if (rootState.pastTrades.onSelectedPeriod.trades.length === 0) return 0;
        return (
          rootState.pastTrades.onSelectedPeriod.lost.length /
          rootState.pastTrades.onSelectedPeriod.trades.length
        );
      }),
      neutral: derived((state: State, rootState: Context["state"]) => {
        if (!rootState.common) return [];
        return rootState.pastTrades.onSelectedPeriod.trades.filter(
          (pt) => pt.profit === 0
        );
      }),
      neutralRatio: derived((state: State, rootState: Context["state"]) => {
        if (!rootState.common) return 0;
        if (rootState.pastTrades.onSelectedPeriod.trades.length === 0) return 0;
        return (
          rootState.pastTrades.onSelectedPeriod.neutral.length /
          rootState.pastTrades.onSelectedPeriod.trades.length
        );
      }),
    },
  },
};
