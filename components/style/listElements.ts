import { styled } from "../../stitches.config";

export const Ul = styled("ul", {
  listStyle: "none",
  margin: 0,
  padding: 1,
  width: "fit-content",
  backgroundColor: "white",
  borderRadius: 3,
  border: "1px solid gray",
  variants: {
    inline: {
      true: { display: "inline-flex" },
    },
    onlyIcons: {
      true: {
        border: "none",
      },
    },
  },
});

export const Li = styled("li", {
  padding: "1px 2px",
  borderRadius: 3,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$binanceOrange",
  },
  variants: {
    withIcon: {
      true: { display: "flex", placeContent: "space-between" },
    },
  },
});

/**
 * Link inside an Li element
 */
export const LiLink = styled("p", {
  margin: 0,
  width: "100%",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

/**
 * Icon inside an Li element
 */
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
