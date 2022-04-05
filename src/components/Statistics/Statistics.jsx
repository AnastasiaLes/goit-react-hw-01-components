import PropTypes from 'prop-types';
import {
  StatisticsCard,
  StatisticsTitle,
  StatisticsList,
  StatisticsElement,
  StatisticsElementLabel,
  StatisticsElementPercentage,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatisticsCard>
      <StatisticsTitle>Upload stats</StatisticsTitle>

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsElement id={stat.id} key={stat.id}>
            <StatisticsElementLabel>{stat.label}</StatisticsElementLabel>
            <StatisticsElementPercentage>
              {stat.percentage}%
            </StatisticsElementPercentage>
          </StatisticsElement>
        ))}
      </StatisticsList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
