import React, { Component } from 'react';
import styled from '@emotion/styled';

import cards from './cards';

const Wrapper = styled.div({
  backgroundColor: 'pink',
});

const Title = styled.div({
  fontWeight: 700,
  fontSize: 32,
  margin: "12px 24px"
});

const CardWrapper = styled.div({
  display: 'flex',
});

class PageOne extends Component { 
  state = {
    cards: [],
  }

  componentDidMount = () => {
    const cardsPromise = cards;

    cardsPromise.then(this.setCards);
  }

  setCards = cards => {
    this.setState({ cards });
  }

  render() {
    if (!this.state.cards.length)
      return <div>grabbing cards</div>
    
    return (
      <Wrapper>
        <Title>Page One</Title>
        <CardWrapper>
          {this.state.cards}
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default PageOne;
