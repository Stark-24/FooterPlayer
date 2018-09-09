import React, {Component} from 'react';
import PlayControlsQueue from './PlayControlsQueue.jsx';
import styled from 'styled-components';
import PreviousIcon from '../assets/previous.jsx';
import RepeatIcon from '../assets/repeat.jsx';

//MAKE EACH BUTTON A CONTROL COMPONENT TO PASS STATE TO THE TIMELINE
class PlayControls extends Component {
  constructor(props) {
    super(props);
    // this.state({

    // })
  }

  render() {
    return (
      
      <React.Fragment>
        {/* Butons */}
        <SkipButton>
          <PreviousIcon/>
        </SkipButton>
        <PlayButton/>
        <SkipButton/>
        <ShuffleButton/>
        <RepeatButton>
          <RepeatIcon/>
        </RepeatButton>
        {/* Time */}
        <Timeline>
          <Scrubbable>
            {/* Elapsed Time */}
            <TimePassedContainer>
              <ElapsedTime>1:30:00</ElapsedTime>
            </TimePassedContainer>
            {/* ProgressBar */}
            <ProgressWrapper>
              <ProgressBackground/>
              <ProgressBar/>
            </ProgressWrapper>
            {/* Total Time */}
            <TimePassedContainer>
              <TotalTime>3:00:00</TotalTime>
            </TimePassedContainer>
          </Scrubbable>
        </Timeline>
        {/* Volume Button */}
        <VolumeButton/>
        {/* Song Description */}
        <SoundBadgeWrapper>
          <SoundBadge>
            <Avatar>

            </Avatar>
            <PlayControlsQueue/>

          </SoundBadge>
        </SoundBadgeWrapper>

      </React.Fragment>
  
    )

  }
}

const Button = styled.button`
  cursor: pointer;
  display: flex;
  position: relative;
  width: 24px;
  float: left;
  height: 48px;
  margin: 0 0 0 12px;
  padding: 0;
  color: transparent;
  border: transparent;
  // outline: none;
`;

const SkipButton = styled(Button)`
  // background-position: 40% center;
`;

const PlayButton = styled(Button)`
  // background-position: center center;
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
  display: flex;
  flex-grow: 1;
  float: left;
  position: relative;
  width: 372px;
  height: 48px;
  margin: 0 12px 0 0;
  padding: 0;
  color: transparent;
  line-height: 46px
`;

const Scrubbable = styled(Timeline)`
  margin: 0;
  height: 46px;
`;

const TimePassedContainer = styled(Scrubbable)`
  width: 50px;
`;

const ElapsedTime = styled.span`
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
  // transition: width 50ms;
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
  height: 100;
  padding: 0;
  width: 324px;
`;

const Avatar = styled.a`
  cursor: pointer;
  line-height: 46px;
  margin: 0 10px 0 0;
  height: 30px;
  width: 30px;
`;

// const ProgressHandle = styled

export default PlayControls;