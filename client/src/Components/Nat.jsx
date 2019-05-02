import React, {Component} from 'react'
import Sound from 'react-sound';

class OMG extends Component {
    render() {
        return (
          <Sound
            url="https://www.myinstants.com/instant/oh-kami-omg/"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        );
        }    
}

export default OMG;