import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HelloCard = styled.div`
  display: inline-block;
  margin: 32px;
  border-radius: 9px;
  padding: 16px 32px;
  color: #ffffff;
  background-color: #bfd8d2;
  font-size: 1.8rem;
`;

export default class Hello extends React.PureComponent {
  render() {
    return (
      <HelloCard>
        <p>Hello, I am {this.props.name}!</p>
        <p>My count is {this.props.count}.</p>
        <p>This is me: {this.props.description}</p>
      </HelloCard>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};
