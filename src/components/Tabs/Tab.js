import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: active
    ? '3px solid blue'
    : '1px solid black',
  backgroundColor: active
    ? 'green'
    : 'grey',
  minWidth: 80,
  width: 200,
  maxWidth: 400,
  cursor: 'pointer',
}));

const Tab = ({ active, children, onClick }) => (
  <Wrapper onClick={onClick} active={active}>
    {children}
  </Wrapper>
);

export default Tab;

Tab.defaultProps = {
  active: false,
};

Tab.propTypes = {
  active: PropTypes.bool,
};
