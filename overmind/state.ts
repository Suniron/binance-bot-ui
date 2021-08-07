interface IState {
  backend: {
    isLinked: boolean;
  };
  websocket: {
    url?: string;
    isOpen: boolean;
  };
}

export const state: IState = {
  backend: {
    isLinked: false,
  },
  websocket: {
    url: undefined,
    isOpen: false,
  },
};
