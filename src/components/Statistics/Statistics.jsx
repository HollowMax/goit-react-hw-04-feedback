import { StatisticsItem } from './StatisticsItem';
import stat from '../database/data.json';

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
