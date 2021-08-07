import React, { useState } from "react";
import {
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem,
} from "../style/DropdownElements";
import { FaSortDown } from "react-icons/fa";
import { useActions, useAppState } from "../../overmind";
import { SelectedPeriod } from "../../overmind/state";

const PeriodSelector = () => {
  const [showOptions, setShowOptions] = useState(false);
  const {
    pastTrades: { selectedPeriod },
  } = useAppState();
  const { changeSelectedPeriod } = useActions();

  /**
   * Handle the user choice and hide selector options.
   * @param choice
   */
  const handleChoice = (choice: SelectedPeriod) => {
    changeSelectedPeriod(choice);
    setShowOptions(false);
  };

  return (
    <Dropdown>
      <DropdownButton
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        {selectedPeriod} <FaSortDown />
      </DropdownButton>
      <DropdownContent
        show={showOptions}
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <DropdownItem onClick={() => handleChoice("Last hour")}>
          Last hour
        </DropdownItem>
        <DropdownItem onClick={() => handleChoice("Last day")}>
          Last day
        </DropdownItem>
        <DropdownItem onClick={() => handleChoice("Last 3 days")}>
          Last 3 days
        </DropdownItem>
        <DropdownItem onClick={() => handleChoice("Last week")}>
          Last week
        </DropdownItem>
        <DropdownItem onClick={() => handleChoice("Last month")}>
          Last month
        </DropdownItem>
        <DropdownItem onClick={() => handleChoice("All")}>All</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export default PeriodSelector;
