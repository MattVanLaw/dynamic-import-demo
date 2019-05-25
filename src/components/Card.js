import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div({
  backgroundColor: 'ghostwhite',
  width: 150,
  minHeight: 60,
  margin: 12,
})

const Title = styled.div({
  fontWeight: 700,
  fontSize: 20,
  margin: '12px 24px',
})
const Body = styled.div({
  margin: 24,
})

const Card = ({
  title,
  body,
}) => (
  <Wrapper>
    <Title>
      {title}
    </Title>
    <Body>
      {body}
    </Body>
  </Wrapper>
);

export default Card;

Card.defaultProps = {
  title: 'Card Title',
  body: 'Card body',
}

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};
