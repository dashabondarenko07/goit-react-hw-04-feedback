import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button key={option} name={option} type="button" onClick={onLeaveFeedback}>
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </Button>
  ));
}

FeedbackOptions.prototype = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
