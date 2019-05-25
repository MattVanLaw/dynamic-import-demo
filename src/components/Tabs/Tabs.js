import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Tab from './Tab';

const Wrapper = styled.div({
  display: "flex",
  minHeight: 50,
});

const Tabs = ({
  number,
  activeTab,
  onClickHandler,
}) => {
  const tabs = [];
  for (let idx = 0; idx < number; idx++) {
    tabs.push(
      <Tab
        key={`${ idx }-tab`}
        onClick={() => onClickHandler(idx)}
        active={idx === activeTab}
      >
        {idx}
      </Tab>
    )
  }

  return (
    <Wrapper>
      {tabs}
    </Wrapper>
  );
};

export default Tabs;

Tabs.defaultProps = {
  number: 0,
  activeTab: 0,
};

Tabs.propTypes = {
  number: PropTypes.number,
  activeTab: PropTypes.number,
};
