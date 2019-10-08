import React, {Component} from 'react';

import css from './Player.module.scss';

import skyHigh from '../../assets/music/sky-high.mp3'
import Visualizer from "./Visualizer/Visualizer";

// fix prefixing
window.AudioContext = window.AudioContext || window.webkitAudioContext;

class Player extends Component {
  player = React.createRef();

  componentDidMount() {
    this.context = new window.AudioContext();
    this.source = this.context.createMediaElementSource(this.player.current);
    this.analyser = this.context.createAnalyser();
    this.analyser.fftSize = 256;
    this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);

    this.source.connect(this.context.destination);
    this.source.connect(this.analyser);
    this.analyser.connect(this.context.destination);
    this.analyser.getByteFrequencyData(this.frequencyData);

    this.setState({
      frequencyData: this.analyser.getByteFrequencyData(this.frequencyData)
    });

    this.update();
  }

  update = () => {
    requestAnimationFrame(this.update);
    this.setState({
      frequencyData: this.analyser.getByteFrequencyData(this.frequencyData)
    });
  };

  render() {
    return (
      <>
        <audio
          controls
          ref={this.player}
        >
          <source src={skyHigh} type="audio/mpeg"/>
              Your browser does not support the audio element.
        </audio>
        <Visualizer dataArr={this.frequencyData}/>
      </>
    );
  }
}

export default Player;
