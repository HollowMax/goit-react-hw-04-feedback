import PropTypes from 'prop-types';

export function StatisticsItem({ stat, state }) {
  return (
    <p>
      {stat}: {state[stat.toLowerCase()]}
    </p>
  );
}

StatisticsItem.propTypes = {
  stat: PropTypes.string.isRequired,
  state: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
