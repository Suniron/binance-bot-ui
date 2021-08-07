import React from "react";
import { styled } from "../stitches.config";

const FooterDiv = styled("div", {});

const Footer = () => {
  return (
    <FooterDiv>
      Interface developed by Etienne BLANC (
      <a href="https://github.com/Suniron/binance-bot-ui">sources</a>)
    </FooterDiv>
  );
};

export default Footer;
