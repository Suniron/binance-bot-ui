import { styled } from "../../stitches.config";

export const CardGroup = styled("div", { overflow: "auto" });

export const Card = styled("div", {
  borderRadius: "3px",
  padding: "3px",
  margin: "3px",
  variants: {
    borderColor: {
      red: {
        border: "3px solid $binanceRed",
      },
      green: {
        border: "3px solid $binanceGreen",
      },
    },
  },
});

export const CardHeader = styled("h3", {
  margin: 0,
  fontSize: "$3",
});

export const CardText = styled("p", { fontSize: "$1", margin: 0 });

export const CardInfo = styled("p", {
  color: "grey",
  fontSize: "$1",
  margin: 0,
});
