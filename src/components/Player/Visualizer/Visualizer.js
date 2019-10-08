import React from 'react';

import css from './Visualizer.module.scss'

const Visualizer = ({dataArr, total}) => {
  function getAngle(index, total) {
    return index / total * Math.PI * Math.PI * 2;
  }

  function getMaximumRadius() {
    return window.innerWidth > window.innerHeight ? window.innerHeight / 2 - 200 : window.innerWidth / 2 - 200
  }

  function getTransformValueX(left, data) {
    return left > 0 ? `${data / 5}px` : `-${data / 5}px`;
  }

  function getTransformValueY(top, data) {
    return top > 0 ? `${data / 5}px` : `-${data / 5}px`;
  }

  return (
    <div className={css.Wrapper}>
      {dataArr && Array.from(dataArr).map((data, index) =>
        <div
          key={`data-${index}`}
          className={css.Data}
          style={{
            left: `${Math.cos(getAngle(index, total)) * getMaximumRadius()}px`,
            top: `${Math.sin(getAngle(index, total)) * getMaximumRadius()}px`,
            transform: `scale(${data/100 + .25}) translate(
            ${getTransformValueX(Math.cos(getAngle(index, total)) * getMaximumRadius(), data)},
            ${getTransformValueY(Math.sin(getAngle(index, total)) * getMaximumRadius(), data)})`
          }}/>
      )}
    </div>
  );
};

export default Visualizer;
