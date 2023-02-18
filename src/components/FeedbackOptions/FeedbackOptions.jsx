import React from 'react';
import PropTypes from 'prop-types';
import { Button, WrapperButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperButton>
      {' '}
      {options.map(option => (
        <Button
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </WrapperButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
