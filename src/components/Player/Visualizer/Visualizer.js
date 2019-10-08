import React from 'react';

import css from './Visualizer.module.scss'

const Visualizer = ({dataArr}) => {
  return (
    <div className={css.Wrapper}>
      {dataArr && Array.from(dataArr).map((data, index) =>
        <div
          key={`data-${index}`}
          className={css.Data}
          style={{height: `${data/3}%`}}/>
      )}
    </div>
  );
};

export default Visualizer;
