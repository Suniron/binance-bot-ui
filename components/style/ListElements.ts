import { styled } from "../../stitches.config";

export const Ul = styled("ul", {
  listStyle: "none",
  padding: 1,
  width: "fit-content",
  backgroundColor: "white",
  borderRadius: 3,
  border: "1px solid gray",
});

export const Li = styled("li", {
  padding: "1px 2px",
  borderRadius: 3,
  "&:hover": {
    backgroundColor: "$binanceOrange",
  },
  variants: {
    type: {
      link: {
        cursor: "pointer",
      },
    },
    withIcon: {
      true: { display: "flex", placeContent: "space-between" },
    },
  },
});

export const LiLink = styled("p", {
  margin: 0,
  width: "100%",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const LiIcon = styled("div", {
  variants: {
    position: {
      left: {
        paddingRight: "5px",
      },
      right: {
        paddingLeft: "5px",
      },
    },
    hoverColor: {
      red: {
        "&:hover": {
          color: "red",
        },
      },
    },
  },
});
