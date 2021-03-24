import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/BrianMLi/site
 */

const DaySinceStart = () => {
  const [day, setDay] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24;
    const startTime = new Date('2021-03-05T08:24:00');
    setDay(((Date.now() - startTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{day}</>;
};

const FoodSinceStart = () => {
  const divisor = 1000 * 60 * 60 * 24;
  const startTime = new Date('2021-03-06T08:24:00');
  const sinceStart = ((Date.now() - startTime) / divisor).toFixed(0);
  return <>{sinceStart}</>;
};

const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/BrianMLi/site/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/BrianMLi/site/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/BrianMLi/site/network',
  },
  {
    label: 'Number of breakfasts skipped',
    value: <FoodSinceStart />,
  },
  {
    label: 'Number of coffees drank',
    value: <FoodSinceStart />,
  },
  {
    label: 'Days since creation',
    value: <DaySinceStart />,
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/BrianMLi/site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '~2000',
    link: 'https://github.com/BrianMLi/site/graphs/contributors',
  },
];

export default data;
