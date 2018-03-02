import React from 'react';
import PropTypes from 'prop-types';

import './hello.css';

export default class Hello extends React.PureComponent {
  render() {
    return (
      <div className='hello'>
        <p className='hello__name'>Hello, I am {this.props.name}!</p>
        <p className='hello__count'>My count is {this.props.count}.</p>
        <p className='hello__description'>This is me: {this.props.description}</p>
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};
