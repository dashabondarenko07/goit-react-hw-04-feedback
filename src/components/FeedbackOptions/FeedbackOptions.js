import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(key => (
    <Button key={key} name={key} type="button" onClick={onLeaveFeedback}>
      {key.charAt(0).toUpperCase() + key.slice(1)}
    </Button>
  ));
}

FeedbackOptions.prototype = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
