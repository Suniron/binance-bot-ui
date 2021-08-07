type PastTrade = {
  date: string; // Backend timezone like "8/5/2021, 11:59:28 AM"
  percent: number;
  profit: number;
  symbol: string;
};

export default PastTrade;
