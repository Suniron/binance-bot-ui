import React, { useState } from "react";
import {
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "../style/DropdownElements";

const PeriodSelector = () => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <Dropdown>
      <DropdownButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Choose a period
      </DropdownButton>
      <DropdownContent
        show={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <DropdownItem>Period 1</DropdownItem>
        <DropdownItem>Period 2</DropdownItem>
        <DropdownItem>Period 3</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export default PeriodSelector;
