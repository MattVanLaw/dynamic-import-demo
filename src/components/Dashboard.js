import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from '@emotion/styled';

import Tabs from './Tabs';

const Wrapper = styled.div();

class Dashboard extends Component {
  state = {
    activeTab: 0,
    pages: [],
  }

  componentDidMount = () => {
    const pagesPromise = this.props.pages;

    pagesPromise.then(this.setPages);
  }

  tabsClickHandler = tab => {
    this.setState({ activeTab: tab })
  }

  setPages = pages => {
    this.setState({ pages });
  }

  render() {
    const { tabsClickHandler, state } = this;

    if (!state.pages.length) return <div>grabbing pages</div>
    const numberOfTabs = state.pages.length;
    return (
      <Wrapper>
        <Tabs
          className={"Tabs"}
          number={numberOfTabs}
          onClickHandler={tabsClickHandler}
          activeTab={state.activeTab}
        />
        {state.pages[state.activeTab]}
      </Wrapper>
    );
  }
}

export default Dashboard;

// Dashboard.defaultProps = {
//   pages: new Promise(() => [<div>FEED ME PAGES</div>]),
// };

// Dashboard.propTypes = {
//   pages: PropTypes.object,
// };

