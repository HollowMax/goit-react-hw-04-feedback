export function StatisticsItem({ stat, state }) {
  return (
    <p>
      {stat}: {state[stat.toLowerCase()]}
    </p>
  );
}
