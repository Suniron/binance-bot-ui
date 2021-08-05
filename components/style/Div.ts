import { styled } from "@stitches/react";

const Div = styled("div", {
  variants: {
    style: {
      contentBox: {
        boxShadow: "0px 0px 20px rgb(0 0 0 / 20%);",
        borderRadius: 3,
        backgroundColor: "White",
        margin: 5,
        padding: 3,
      },
    },
  },
});

export default Div;
