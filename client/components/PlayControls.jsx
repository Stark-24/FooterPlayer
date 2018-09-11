import React, {Component} from 'react';
import PlayControlsQueue from './PlayControlsQueue.jsx';
import styled from 'styled-components';
//svgs
import PreviousIcon from '../assets/previous.jsx';
import PauseIcon from '../assets/pause.jsx';
import NextIcon from '../assets/next.jsx';
import ShuffleIcon from '../assets/shuffle.jsx';
import RepeatIcon from '../assets/repeat.jsx';
import RepeatOneIcon from '../assets/repeat-one.jsx';
import RepeatAllIcon from '../assets/repeat-all.jsx';
import MuteIcon from '../assets/mute.jsx';
import VolumeMinIcon from '../assets/volume-min.jsx';
import VolumeMaxIcon from '../assets/volume-max.jsx';
import LikeIcon from '../assets/like.jsx';
import HamburgerIcon from '../assets/hamburger.jsx';
// import * as Icons from '../assets';

//MAKE EACH BUTTON A CONTROL COMPONENT TO PASS STATE TO THE TIMELINE
class PlayControls extends Component {
  constructor(props) {
    super(props);
    // this.state({

    // })
  }


  render() {
    return (
      
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
        }}>
        {/* Buttons */}
        <SkipButton>
          <PreviousIcon/>
        </SkipButton>

        <PlayButton>
          <PauseIcon/>
        </PlayButton>

        <SkipButton>
          <NextIcon/>
        </SkipButton>

        <ShuffleButton>
          <ShuffleIcon/>
        </ShuffleButton>

        <RepeatButton>
          <RepeatIcon/>
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
        <VolumeButton>
          <VolumeMaxIcon/>
        </VolumeButton>
        {/* Song Description */}
        <SoundBadgeWrapper>
          <SoundBadge>
            <Avatar>
              <VolumeMinIcon/>
            </Avatar>
            <CurrentPlaying>
              <CurrentArtist>TESTING 1 TESTING 2 TESTING 3 TESTING 4 TESTING 5 TESTING 6</CurrentArtist>
              <CurrentSongContainer>
                <CurrentSong>TESTING 1 TESTING 2 TESTING 3 TESTING 4 TESTING 5 TESTING 6</CurrentSong>
              </CurrentSongContainer>
            </CurrentPlaying>
            <SoundBadgeActions>
              <LikeButton>
                <LikeIcon/>
              </LikeButton>
              <QueueButton>
                <HamburgerIcon/>
                <PlayControlsQueue/>
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
  margin-right: 20px;
`;

const VolumeButton = styled(RepeatButton)`
  margin-left: 0;
`;

const Timeline = styled.div`
  display: block;
  flex-grow: 1;
  float: left;
  position: relative;
  width: 472px;
  height: 48px;
  margin: 0 12px 0 0;
  padding: 0;
  color: transparent;
  line-height: 46px
`;

const Scrubbable = styled(Timeline)`
  display: flex;
  margin: 0;
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

// const ProgressHandle = styled

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

const Avatar = styled.a`
  cursor: pointer;
  display: block;
  float: left;
  /* vertical-align: middle; */
  /* top: 50%;
  bottom: 50%; */
  margin: auto 10px auto 0;
  /* margin-right: 10px; */
  height: 30px;
  width: 30px;
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
  margin: auto 0 auto 14px;
`;

const LikeButton = styled(Button)`
  width: 20px;
  height: 20px;
  margin: auto;
`;

const QueueButton = styled(Button)`
  height: 24px;
  margin: 0;
`;

export default PlayControls;