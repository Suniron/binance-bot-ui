import { styled } from "@stitches/react";

export const Dropdown = styled("div", {
  position: "relative",
  display: "inline-block",
});

export const DropdownContent = styled("div", {
  display: "none",
  position: "absolute",
  backgroundColor: "#fafafa",
  minWidth: "160px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  zIndex: 1,
  padding: 2,
  variants: {
    show: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export const DropdownButton = styled("button", {
  borderRadius: 3,
  border: "1px solid gray",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "DarkGray",
  },
});

export const DropdownItem = styled("a", {
  display: "block",
  padding: "1px 5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#FCD535",
  },
});
