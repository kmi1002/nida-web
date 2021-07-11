import React from 'react';
import * as T from './VisitBrowser.type';
import * as S from './VisitBrowser.style';
import { Line } from 'react-chartjs-2';

const VisitBrowserView = () => {
  const data = {
    labels: ['2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05', '2021-01-06'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
      },
    ],
  };

  const options = { type: 'line' };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default VisitBrowserView;
