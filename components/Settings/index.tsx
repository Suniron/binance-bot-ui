import React from "react";
import Div from "../style/Div";
import { Li, Ul } from "../style/listElements";
import Disconnector from "./Disconnector";

const Settings = () => {
  return (
    <Div style="contentBox">
      <Ul inline onlyIcons>
        <Li title="Disconnect from backend">
          <Disconnector />
        </Li>
      </Ul>
    </Div>
  );
};

export default Settings;
