import React from 'react';
import PlayControls from './PlayControls.jsx';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

var FooterPlayer = (props) => (

  <React.Fragment>
    <CssBaseline/>
    <Wrapper>
      <InnerWrapper>
        <ControlsInnerWrapper>
          <PlayControls/>
        </ControlsInnerWrapper>
      </InnerWrapper>
    </Wrapper>
  </React.Fragment>

)

const Wrapper = styled.div`
  visibility: hidden;
  position: fixed;
  z-index: 111;
  bottom: 0;
  width: 100%;
  height: 49px;
  background-color: #f2f2f2;
  border-top: 1px solid #cecece;
  font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
`;

const InnerWrapper = styled(Wrapper)`
  visibility: visible;
  z-index: 222;
`;

const ControlsInnerWrapper = styled(InnerWrapper)`
  z-index: 333;
  width: 1240px;
  min-width: 960px;
  position: relative;
  flex-wrap: nowrap;
  margin: 0 auto;
`;

export default FooterPlayer;