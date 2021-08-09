import { styled } from "../../stitches.config";

export const Table = styled("table", {
  borderSpacing: 0,
  width: "fit-content",
});

export const THead = styled("thead", {
  borderSpacing: 0,
  backgroundColor: "$binanceLightGrey",
});

export const Th = styled("th", {
  padding: "0px",
  borderBottom: "1px solid lightgrey",
});

export const TBody = styled("tbody", {});

export const Tr = styled("tr", {
  "&:hover": { backgroundColor: "$binanceLightGrey2" },
  variants: {
    color: {
      red: { color: "$binanceRed" },
      green: { color: "$binanceGreen" },
    },
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
  },
});

export const Td = styled("td", {
  borderTop: "1px solid lightgrey",
});
