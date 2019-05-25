import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from '@emotion/styled';

import Tabs from './Tabs';

const Wrapper = styled.div();

class Dashboard extends Component {
  state = {
    activeTab: 0,
  }

  tabsClickHandler = tab => {
    this.setState({ activeTab: tab })
  }

  render() {
    const { tabsClickHandler, state, props } = this;
    const numberOfTabs = props.pages.length;

    return (
      <Wrapper>
        <Tabs
          className={"Tabs"}
          number={numberOfTabs}
          onClickHandler={tabsClickHandler}
          activeTab={state.activeTab}
        />
        {props.pages[state.activeTab]}
      </Wrapper>
    );
  }
}

export default Dashboard;

Dashboard.defaultProps = {
  pages: [<div>FEED ME PAGES</div>]
};

Dashboard.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.node)
};

