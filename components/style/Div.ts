import { styled } from "../../stitches.config";

const Div = styled("div", {
  variants: {
    style: {
      contentBox: {
        display: "flex",
        placeContent: "center",
        boxShadow: "0px 0px 20px rgb(0 0 0 / 20%);",
        borderRadius: 3,
        backgroundColor: "White",
        margin: 5,
        padding: 3,
      },
    },
    flex: { true: { display: "flex", width: "100%", placeContent: "center" } },
  },
});

export default Div;
