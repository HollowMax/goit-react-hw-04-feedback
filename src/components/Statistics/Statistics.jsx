import { StatisticsItem } from './StatisticsItem';
import stat from '../database/data.json';
import PropTypes from 'prop-types';

export function Statistics({ state, total, positivePercentage }) {
  return (
    <>
      {stat.map(el => (
        <StatisticsItem stat={el} key={el} state={state} />
      ))}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage || 0}%</p>
    </>
  );
}

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
