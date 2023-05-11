import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({ data, title = 'Upload stats' }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {data.map(stats => (
        <li
          className={css.item}
          key={stats.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>{stats.label}</span>
          <span className={css.percentage}>{stats.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
