import { createStitches } from "@stitches/react";

export const { css, styled, getCssText } = createStitches({
  theme: {
    colors: {
      binanceOrange: "#FCD535",
      binanceBlack: "#181A20",
      binanceRed: "rgb(246, 70, 93)",
      binanceGreen: "rgb(14, 203, 129);",
      binanceYellow: "rgb(252, 234, 156);",
      binanceLightGrey: "rgb(250,250,250)",
      binanceLightGrey2: "rgb(245,245,245)",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
    },
    fonts: {
      system: "system-ui",
    },
  },
  utils: {},
  media: {
    smartphone: `@media (min-width: 640px)`,
    tablet: `@media (min-width: 768px)`,
    laptop: `@media (min-width: 1024px)`,
  },
});
