import React, {Component} from 'react';
import QueueItemView from './QueueItemView.jsx';
import styled from 'styled-components';

var PlayControlsQueue = ({popoutStyles, songs}) => {
  return (
    <QueuePanel style={popoutStyles}>
      <Header>
        <Title> Next Up </Title>
        <ClearButton type="submit" value="Clear"/>
        <HideQueue type="submit" value="X"/>
      </Header>
      <Scrollable>
        <ScrollableInner>
          {/* <div> */}
          {songs.map(song => (
            <QueueItemView song={song} key={song.id}/>
          ))}
          {/* </div> */}
        </ScrollableInner>
      </Scrollable>
    </QueuePanel>
  )
}

const QueuePanel = styled.div`
  position: absolute;
  bottom: 54px;
  right: 8px;
  width: 480px;
  height: 660px;
  max-height: calc(100vh - 120px);
  box-shadow: 0 0 4px rgba(0,0,0,.25);
  background-color: #fff;
  user-select: none;
`;

const Header = styled.div`
  cursor: auto;
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  padding: 9px 24px;
  height: 64px;
`;

const Title = styled.div`
  cursor: pointer;
  display: block;
  flex-grow: 1;
  line-height: 46px;
  font-size: 16px;
`;

const ClearButton = styled.input`
  cursor: pointer;
  display: inline-block;
  position: relative;
  height: 26px;
  margin: 0;
  margin-right: 16px;
  padding: 2px 11px 2px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background-color: #fff;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  font-weight: 100;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans;
  text-align: center;
  vertical-align: baseline;
`;

const HideQueue = styled(ClearButton)`
  height: 46px;
  text-align: center;
  vertical-align: center;
  font-size: 20px;
  font-weight: bold;
  border: 0;
  text-shadow: none;
  background: 0 0;
  transition: none;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const Scrollable = styled.div`
  overflow: hidden !important;
  display: inline-block;
  box-sizing: border-box;
  top: 64px;
  left: 0;
  width: 100%;
  bottom: 0;
  position: absolute;
`;

const ScrollableInner = styled.div`
  display: block;
  width: 480px;
  height: 596px;
  overflow-y: scroll;
`;

//TODO: after adding items
const ScrollBar = styled.div`
  height: 30px;
  width: 7px;
  margin-top: 2px;
  right: 2px;

  opacity: 0;
  position: absolute;
  background: rgba(0,0,0,.3);
  border-radius: 7px;
  box-shadow: 0 0 1px #fff;
  transition: opacity .3s linear;
`;

export default PlayControlsQueue;