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

//State management for visual and functional play controls
class PlayControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSongIndex: 0,
      currentSong: '',
      currentSongArtwork: '',
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
      }, 
      // queueItemViewSelect: {
      //   background: '#fff',
      //   visibility: 'hidden'
      // },
    }
    this.previousHandler = this.previousHandler.bind(this);
    this.playHandler = this.playHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
    this.shuffleHandler = this.shuffleHandler.bind(this);
    this.repeatHandler = this.repeatHandler.bind(this);
    this.volumeHandler = this.volumeHandler.bind(this);
    this.likeHandler = this.likeHandler.bind(this);
    this.volumeMouseEnter = this.volumeMouseEnter.bind(this);
    this.volumeMouseLeave = this.volumeMouseLeave.bind(this);
    this.queueHandler = this.queueHandler.bind(this);
    this.queueItemClickHandler = this.queueItemClickHandler.bind(this);
    this.fetch = this.fetch.bind(this);
    this.fromSeconds = this.fromSeconds.bind(this);
  }

  //Immediately grab the current song duration
  componentDidMount() {
    this.fetch();
    let duration;
    document.getElementById('player').onloadedmetadata = () => {
      duration = Math.floor(document.getElementById('player').duration);
      document.getElementById('duration').innerHTML = this.fromSeconds(duration);
    }
  }

  //Fetch song data from the database of songs
  fetch() {
    axios
      .get('http://13.57.31.213:9004/api/songs')
      .then(({data}) => {
        this.setState({
          songs: data
        },
          () => {
            this.setState({
              currentSong: this.state.songs[this.state.currentSongIndex]
            },
              () => {
                this.setState({
                  currentSongArtwork: this.state.currentSong.album_art
                })
              }
            )
          }
        );
      })
      .catch((err) => {
        console.log('Error retrieving songs', err);
      });
  }

  //Handles previous song button state and song changing
  previousHandler() {
    if (this.state.currentSongIndex === 0) {
      this.setState({
        currentSongIndex: this.state.songs.length - 1,
      }, 
        () => {
          this.setState({
            currentSong: this.state.songs[this.state.currentSongIndex]
          },
            () => {
              this.setState({
                currentSongArtwork: this.state.currentSong.album_art,
              },
                () => {
                  if (this.state.play) {
                    document.getElementById('player').play();
                  } else {
                    document.getElementById('player').pause();
                    let duration;
                    document.getElementById('player').onloadedmetadata = () => {
                      duration = Math.floor(document.getElementById('player').duration);
                      document.getElementById('duration').innerHTML = this.fromSeconds(duration);
                    }
                  }
                }
              )
            }
          )
        }
      );
    } else {
      this.setState({
        currentSongIndex: this.state.currentSongIndex - 1,
      },
        () => {
          this.setState({
            currentSong: this.state.songs[this.state.currentSongIndex]
          },
            () => {
              this.setState({
                currentSongArtwork: this.state.currentSong.album_art,
              },
                () => {
                  if (this.state.play) {
                    document.getElementById('player').play();
                  } else {
                    document.getElementById('player').pause();
                    let duration;
                    document.getElementById('player').onloadedmetadata = () => {
                      duration = Math.floor(document.getElementById('player').duration);
                      document.getElementById('duration').innerHTML = this.fromSeconds(duration);
                    }
                  }
                }
              )
            }
          )
        }
      )
    }
  }

  //Handles state of play button upon click
  playHandler() {
    this.setState({
      play: !this.state.play
    }, 
      () => {
        if (this.state.play) {
          document.getElementById('player').play();
        } else {
          document.getElementById('player').pause();
        }
      }
    );
  }

  //Handles next song button state and song changing
  nextHandler() {
    if (this.state.currentSongIndex === this.state.songs.length - 1) {
      this.setState({
        currentSongIndex: 0,
      },
        () => {
          this.setState({
            currentSong: this.state.songs[this.state.currentSongIndex]
          },
            () => {
              this.setState({
                currentSongArtwork: this.state.currentSong.album_art,
              },
                () => {
                  if (this.state.play) {
                    document.getElementById('player').play();
                  } else {
                    document.getElementById('player').pause();
                    let duration;
                    document.getElementById('player').onloadedmetadata = () => {
                      duration = Math.floor(document.getElementById('player').duration);
                      document.getElementById('duration').innerHTML = this.fromSeconds(duration);
                    }
                  }
                }
              )
            }
          )
        }
      );
    } else {
      this.setState({
        currentSongIndex: this.state.currentSongIndex + 1,
      },
        () => {
          this.setState({
            currentSong: this.state.songs[this.state.currentSongIndex]
          },
            () => {
              this.setState({
                currentSongArtwork: this.state.currentSong.album_art,
              },
                () => {
                  if (this.state.play) {
                    document.getElementById('player').play();
                  } else {
                    document.getElementById('player').pause();
                    let duration;
                    document.getElementById('player').onloadedmetadata = () => {
                      duration = Math.floor(document.getElementById('player').duration);
                      document.getElementById('duration').innerHTML = this.fromSeconds(duration);
                    }
                  }
                }
              )
            }
          )
        }
      );
    }
  }

  shuffleHandler() {
    this.setState({
      shuffle: !this.state.shuffle
    });
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

  queueItemClickHandler(song, index) {
    this.setState({
      currentSongIndex: index,
      currentSong: song,
      currentSongArtwork: song.album_art,
      // queueItemViewSelect: {
      //   background: '#f8f8f8',
      //   visibility: 'visible'
      // }
    },
      () => {
        // document.getElementById('itemView').style.backgroundColor('#f8f8f8');
        if (this.state.play) {
          document.getElementById('player').play();
        } else {
          this.playHandler();
        }
      }
    )
  }

  // queueItemHoverHandler() {

  // };

  fromSeconds(seconds) {
    var minutes =
      Math.floor(seconds / 60) < 10
        ? Math.floor(seconds / 60)
        : Math.floor(seconds / 60);
    var seconds = 
      seconds % 60 > 9 ? 
        seconds % 60 : 
        "0" + (seconds % 60);
    var timestring = minutes + ":" + seconds;
    return timestring;
  }

  render() {
    let audioPlayer = document.getElementById('player');
    let playButton = this.state.play ? <PauseIcon/> : <PlayIcon/>;
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
        width: "100%",
        justifyContent: "center",
      }}>
      <audio
        id = "player"
        src = {this.state.currentSong.media}
        onTimeUpdate = {() => {
          if (audioPlayer.currentTime === audioPlayer.duration) {
            document.getElementById("currentTime").innerHTML = "0:00";
            this.pauseMusic(audioPlayer);
          } else {
            let currentTime = Math.floor(audioPlayer.currentTime);
            let duration = Math.floor(audioPlayer.duration);
            document.getElementById("currentTime").innerHTML = this.fromSeconds(currentTime);
            document.getElementById("duration").innerHTML = this.fromSeconds(duration);
            document.getElementById("currentProgress").style.width = ((currentTime/duration) * 352) + "px"
          }
        }}
      />
        {/* Buttons */}
        <SkipButton onClick={this.previousHandler}>
          <PreviousIcon/>
        </SkipButton>

        <PlayButton onClick={this.playHandler}>
          {playButton}
        </PlayButton>

        <SkipButton onClick={this.nextHandler}>
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
              <ElapsedTime id="currentTime">
                0:00
              </ElapsedTime>
            </TimePassedContainer>
            {/* ProgressBar */}
            <ProgressWrapper>
              <ProgressBackground/>
              <ProgressBar id="currentProgress"/>
            </ProgressWrapper>
            {/* Total Time */}
            <TimePassedContainer>
              <TotalTime id="duration">
                -:--
              </TotalTime>
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
              style={{backgroundImage: `url(${this.state.currentSongArtwork})`}}
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
                  queueItemClickHandler={this.queueItemClickHandler}
                  songs={this.state.songs}
                  popoutStyles={{
                    pointerEvents: this.state.queuePanelStyle.pointerEvents,
                    transform: this.state.queuePanelStyle.transform,
                    opacity: this.state.queuePanelStyle.opacity,
                    transitionDuration: this.state.queuePanelStyle.transitionDuration,
                    transitionTimingFunction: this.state.queuePanelStyle.transitionTimingFunction
                  }}
                  // queueItemViewSelect={this.state.queueItemViewSelect}
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
`;

const PlayButton = styled(Button)`
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
  width: 632px;
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
  width: 512px;
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
  width: 0;
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