import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
  return (
    <>
      <h1>props practice</h1>
      <div>
        hi, My name is {props.name}.<br />
        children's result is {props.children}
        <br />I favorite number is {props.favoriteNumber}.
      </div>
    </>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
