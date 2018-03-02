import React from 'react';

import './hello.css';

class Hello extends React.Component {
  render() {
    return <div className='hello'>
             <p className='hello__name'>Hello, I am {this.props.name}!</p>
             <p className='hello__count'>My count is {this.props.count}.</p>
             <p className='hello__description'>This is me: {this.props.description}</p>
           </div>
  }
}

export default Hello;
