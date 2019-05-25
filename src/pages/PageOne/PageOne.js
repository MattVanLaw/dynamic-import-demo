import React from 'react';
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

export default () => (
  <Wrapper>
    <Title>Page One</Title>
    <CardWrapper>
      {cards}
    </CardWrapper>
  </Wrapper>
);
