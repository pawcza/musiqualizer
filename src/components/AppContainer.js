import React, {Component} from 'react';
import Player from "./Player/Player";

import css from './AppContainer.module.scss'

class AppContainer extends Component {
  render() {
    return (
      <div className={css.AppContainer}>
        <Player/>
      </div>
    );
  }
}

export default AppContainer;
