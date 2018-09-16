import React, {Component} from 'react';
import PlayControlsQueue from './PlayControlsQueue.jsx';
import styled from 'styled-components';
import axios from 'axios';
//svgs
import PreviousIcon from '../assets/previous.jsx';
import PauseIcon from '../assets/pause.jsx';
import PlayIcon from '../assets/play.jsx';
import NextIcon from '../assets/next.jsx';
import ShuffleOffIcon from '../assets/shuffle-off.jsx';
import ShuffleOnIcon from '../assets/shuffle-on.jsx';
import RepeatNoneIcon from '../assets/repeat.jsx';
import RepeatOneIcon from '../assets/repeat-one.jsx';
import RepeatAllIcon from '../assets/repeat-all.jsx';
import MuteIcon from '../assets/mute.jsx';
import VolumeMinIcon from '../assets/volume-min.jsx';
import VolumeMaxIcon from '../assets/volume-max.jsx';
import DislikeIcon from '../assets/dislike.jsx';
import LikeIcon from '../assets/like.jsx';
import HamburgerIcon from '../assets/hamburger.jsx';
import HamburgerClickedIcon from '../assets/hamburger-clicked.jsx';
// import * as Icons from '../assets';

//MAKE EACH BUTTON A CONTROL COMPONENT TO PASS STATE TO THE TIMELINE
class PlayControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: '',
      songs: [],
      play: false,
      shuffle: false,
      repeat: 0,
      volume: true,
      like: false,
      volumeSliderStyle: {
        height: '0',
        borderColor: '#f2f2f2',
        boxShadow: '0',
        overflow: 'none'
      },
      queue: false,
      queuePanelStyle: {
        pointerEvents: 'none',
        transform: 'translateY(100px)',
        opacity: '0',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'cubic-bezier(.66,-.41,1,1)'
      }
    }
    this.playHandler = this.playHandler.bind(this);
    this.shuffleHandler = this.shuffleHandler.bind(this);
    this.repeatHandler = this.repeatHandler.bind(this);
    this.volumeHandler = this.volumeHandler.bind(this);
    this.likeHandler = this.likeHandler.bind(this);
    this.volumeMouseEnter = this.volumeMouseEnter.bind(this);
    this.volumeMouseLeave = this.volumeMouseLeave.bind(this);
    this.queueHandler = this.queueHandler.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    axios
      .get('/api/songs')
      .then(({data}) => {
        console.log(data[0]);
        this.setState({
          currentSong: data[0],
          songs: data
        })
      })
      .catch((err) => {
        console.log('Error retrieving songs', err);
      });
  }

  playHandler() {
    this.setState({
      play: !this.state.play
    })
  }
  shuffleHandler() {
    this.setState({
      shuffle: !this.state.shuffle
    })
  }
  repeatHandler() {
    if (this.state.repeat === 2) {
      this.setState({
        repeat: 0
      })
    } else {
      this.setState({
        repeat: this.state.repeat + 1
      })
    }
  }
  volumeHandler() {
    this.setState({
      volume: !this.state.volume
    })
  }
  likeHandler() {
    this.setState({
      like: !this.state.like
    })
  }

  volumeMouseEnter() {
    this.setState({
      volumeSliderStyle: {
        height: '118px',
        borderColor: '#ccc',
        boxShadow: '0 2px 4px rgba(0,0,0,.1)',
        overflow: 'initial',
        opacity: '1'
      }
    })
  }
  volumeMouseLeave() {
    this.setState({
      volumeSliderStyle: {
        height: '0',
        borderColor: '#f2f2f2',
        boxShadow: 'none',
        overflow: 'none',
        opacity: '0'
      }
    })
  }

  queueHandler() {
    if (this.state.queue) {
      this.setState({
        queue: !this.state.queue,
        queuePanelStyle: {
          pointerEvents: 'none',
          transform: 'translateY(100px)',
          opacity: '0',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'cubic-bezier(.66,-.41,1,1)'
        }
      })
    } else {
      this.setState({
        queue: !this.state.queue,
        queuePanelStyle: {
          pointerEvents: 'auto',
          transform: 'translateY(0)',
          opacity: '1',
          transitionDuration: '0.35s',
          transitionTimingFunction: 'cubic-bezier(0,0,0,1.2)'
        }
      })
    }
  }

  render() {
    let playButton = this.state.play ? <PlayIcon/> : <PauseIcon/>;
    let shuffleButton = this.state.shuffle ? <ShuffleOnIcon/> : <ShuffleOffIcon/>;
    let repeatButton = this.state.repeat === 0 ? <RepeatNoneIcon/> :
                      this.state.repeat === 1 ? <RepeatOneIcon/> :
                      <RepeatAllIcon/>;
    let volumeButton = this.state.volume ? <VolumeMaxIcon/> : <MuteIcon/>;
    let likeButton = this.state.like ? <LikeIcon/> : <DislikeIcon/>;
    let queueButton = this.state.queue ? <HamburgerClickedIcon/> : <HamburgerIcon/>;
    return (
      <div style={{
        display: "flex",
        // flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        // alignItems: "center",
        // alignContent: "center"
        }}>
        {/* Buttons */}
        <SkipButton>
          <PreviousIcon/>
        </SkipButton>

        <PlayButton onClick={this.playHandler}>
          {playButton}
        </PlayButton>

        <SkipButton>
          <NextIcon/>
        </SkipButton>

        <ShuffleButton onClick={this.shuffleHandler}>
          {shuffleButton}
        </ShuffleButton>

        <RepeatButton onClick={this.repeatHandler}>
          {repeatButton}
        </RepeatButton>
        {/* Time */}
        <Timeline>
          <Scrubbable>
            {/* Elapsed Time */}
            <TimePassedContainer>
              <ElapsedTime>30:00</ElapsedTime>
            </TimePassedContainer>
            {/* ProgressBar */}
            <ProgressWrapper>
              <ProgressBackground/>
              <ProgressBar/>
            </ProgressWrapper>
            {/* Total Time */}
            <TimePassedContainer>
              <TotalTime>1:00:00</TotalTime>
            </TimePassedContainer>
          </Scrubbable>
        </Timeline>
        {/* Volume Button */}
        <VolumeButton 
          onClick={this.volumeHandler} 
          onMouseEnter={this.volumeMouseEnter} 
          onMouseLeave={this.volumeMouseLeave}>
          {volumeButton}
          <VolumeSlider style={{
            height: this.state.volumeSliderStyle.height,
            borderColor: this.state.volumeSliderStyle.borderColor,
            boxShadow: this.state.volumeSliderStyle.boxShadow,
            overflow: this.state.volumeSliderStyle.overflow
          }}>

            <VolumeSliderBackground style={{
              opacity: this.state.volumeSliderStyle.opacity
            }}/>
            <VolumeSliderProgress style={{
              opacity: this.state.volumeSliderStyle.opacity
            }}/>

          </VolumeSlider>
        </VolumeButton>
        {/* Song Description */}
        <SoundBadgeWrapper>
          <SoundBadge>
            <Avatar 
              style={{backgroundImage: `url(${this.state.currentSong.album_art})`}}
            />
            <CurrentPlaying>
              <CurrentArtist>{this.state.currentSong.artist}</CurrentArtist>
              <CurrentSongContainer>
                <CurrentSong>{this.state.currentSong.title}</CurrentSong>
              </CurrentSongContainer>
            </CurrentPlaying>
            <SoundBadgeActions>
              <LikeButton onClick={this.likeHandler}>
                {likeButton}
              </LikeButton>
              <QueueButton onClick={this.queueHandler}>
                {queueButton}
                <PlayControlsQueue 
                  songs={this.state.songs}
                  popoutStyles={{
                    pointerEvents: this.state.queuePanelStyle.pointerEvents,
                    transform: this.state.queuePanelStyle.transform,
                    opacity: this.state.queuePanelStyle.opacity,
                    transitionDuration: this.state.queuePanelStyle.transitionDuration,
                    transitionTimingFunction: this.state.queuePanelStyle.transitionTimingFunction
                  }}
                />
              </QueueButton>
            </SoundBadgeActions>
            
          </SoundBadge>
        </SoundBadgeWrapper>

      </div>
  
    )

  }
}

const Button = styled.button`
  cursor: pointer;
  display: block;
  position: relative;
  width: 24px;
  float: left;
  height: 48px;
  margin: 0 0 0 12px;
  padding: 0;
  background-color: #f2f2f2;
  border: transparent;
  outline: none;
`;

const SkipButton = styled(Button)`
  /* background-position: center; */
`;

const PlayButton = styled(Button)`
  /* background-position: center center; */
`;

const ShuffleButton = styled(Button)`

`;

const RepeatButton = styled(Button)`
  margin-right: 12px;
`;

const VolumeButton = styled(RepeatButton)`
  margin-left: 0;
`;

const VolumeSlider = styled.div`
  position: absolute;
  left: -5px;
  bottom: 40px;
  z-index: 1;
  height: 0;
  width: 30px;
  transition: height 100ms;
  transform: translateZ(0);
  overflow: hidden;
  background-color: #f2f2f2;
  border: 1px solid transparent;
  outline: 0;
  cursor: pointer;
`;

const VolumeSliderBackground = styled.div`
  opacity: 0;
  transition: opacity 100ms linear;
  transition-delay: 100ms;

  z-index: 2;
  position: absolute;
  display: block;
  background-color: #ccc;
  bottom: 13px;
  left: 0;
  height: 92px;
  width: 2px;
  border: none;
  box-shadow: none;
  border-radius: 0;
  outline: 0;
  margin-left: 14px; 
`;

const VolumeSliderProgress = styled(VolumeSliderBackground)`
  height: 40px;
  background-color: #f50;
  z-index: 3;

`;

const Timeline = styled.div`
  display: block;
  flex-grow: 1;
  float: left;
  position: relative;
  width: 472px;
  /* min-width: 332px; */
  height: 48px;
  margin: 0 12px 0 0;
  padding: 0;
  color: transparent;
  line-height: 46px
`;

const Scrubbable = styled(Timeline)`
  display: flex;
  margin: 0;
  width: 100%;
  height: 46px;
`;

const TimePassedContainer = styled(Scrubbable)`
  display: block;
  width: 50px;
`;

const ElapsedTime = styled.span`
  display: block;
  color: #f50;
  text-align: right;
  line-height: 46px;
  font-size: 11px;
  background-color: transparent;
`;

const ProgressWrapper = styled(Scrubbable)`
  cursor: pointer;
  padding: 10px 0;
  width: 352px;
  margin: 13px 10px 0 10px;
`;

const TotalTime = styled(ElapsedTime)`
  cursor: pointer;
  color: #333;
  text-align: left;
`;

const ProgressBackground = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #ccc;
  position: absolute;
`;

const ProgressBar = styled(ProgressBackground)`
  /* transition: width 50ms; */
  background-color: #f50;
  width: 50%;
`;

const SoundBadgeWrapper = styled(Timeline)`
  display: block;
  box-sizing: border-box;
  width: 340px;
  margin: 0;
  padding: 0 8px;
`;

const SoundBadge = styled(SoundBadgeWrapper)`
  display: flex;
  height: 100%;
  padding: 0;
  width: 324px;
  float: left;
  /* vertical-align: middle; */
`;

const Avatar = styled.div`
  cursor: pointer;
  display: block;
  float: left;
  /* vertical-align: middle; */
  /* top: 50%;
  bottom: 50%; */
  margin: auto 10px auto 0;
  /* margin-right: 10px; */
  height: 30px;
  min-width: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

const CurrentPlaying = styled.div`
  display: block;
  float: left;
  height: 34px;
  min-width: 250px;
  max-width: 250px;
  margin: auto 0 auto 0;
  /* line-height: 1.5em; */
`;

const CurrentArtist = styled.a`
  cursor: pointer;
  color: #999;
  font-size: 11px;
  line-height: 16px;
  display: flex;
  width: 100%;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
`;

const CurrentSongContainer = styled.div`
  display: flex;
  width: 100%;
  height: 17px;
  align-items: center;
`;

const CurrentSong = styled(CurrentArtist)`
  color: #666;
`;

const SoundBadgeActions = styled.div`
  display: flex;
  width: 49px;
  height: 24px;
  margin: auto 0 auto 7px;
`;

const LikeButton = styled(Button)`
  width: 24px;
  height: 24px;
  margin: auto;
`;

const QueueButton = styled(Button)`
  height: 24px;
  margin: 0;
`;

export default PlayControls;