import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

var NavBar = (props) => (
  <React.Fragment>
    <CssBaseline/>
    <Banner>
      <HeaderInner>
        <HeaderLeft>
          <Logo/>
          <nav style={{display: "block", float: "left"}}>
            <ul style={{margin: "0", listStyle: "none", padding: "0"}}>
              <Home> Home </Home>
              <Collection> Collection </Collection>
            </ul>
          </nav>
        </HeaderLeft>
        <HeaderMiddle>
          <Search>
            <Input placeholder="Search" type="search"/>
          </Search>
        </HeaderMiddle>
        <HeaderRight>
          <TryPro> Try Pro </TryPro>
          <Upload> Upload </Upload>
          <User> Stark </User>
          <Notifications>Notifications</Notifications>
          <Messages>Messages</Messages>
          {/* <NavMore>More</NavMore> */}
        </HeaderRight>
      </HeaderInner>
    </Banner>
  </React.Fragment>
)

const Banner = styled.div`
  top: 0;
  width: 100%;
  font-size: 14px;
  font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
  background: #333;
  height: 47px;
  position: fixed;
  z-index: 1000;
`;

const HeaderInner = styled.div`
  cursor: pointer;
  width: 1240px;
  padding: 0;
  display: flex;
  margin: 0 auto;
`;

const HeaderLeft = styled.div`
  /* width: 277px; */
  display: block;
  visibility: visible;
`;

const Logo = styled.div`
  display: block;
  background: linear-gradient(#f70,#f30);
  float: left;
  width: 69px;
  height: 47px;
  background-image: url('https://s3-us-west-1.amazonaws.com/starkloud-footer/starkloud.png');
  background-size: 69px 47px;
  background-repeat: no-repeat;
`;

const Home = styled.li`
  color: #ccc;
  float: left;
  height: 47px;
  width: 104px;
  text-align: center;
  line-height: 46px;
  border-right: 1px solid #111;
`;

const Collection = styled(Home)`
`;

const HeaderMiddle = styled(HeaderLeft)`
  width: 556px;
  flex: 1;
`;

const Search = styled.form`
  display: block;
  position: relative;
  padding: 9px 10px 8px;
`;

const Input = styled.input`
  color: #666;
  outline: 0;
  border: 0;
  padding: 5px 7px;
  background: #e5e5e5;
  height: 28px;
  width: 100%;
  display: inline-block;
  font-family: "Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
`;

const HeaderRight = styled(HeaderLeft)`
  /* width: 406px; */
`;

const TryPro = styled.a`
  color: #ccc;
  text-decoration: none;
  padding: 14px 10px 12px;
  float: left;
`;

const Upload = styled(TryPro)`
`;

const User = styled(TryPro)`
`;

const Notifications = styled(TryPro)`
`;

const Messages = styled(TryPro)`
`;

const NavMore = styled(TryPro)`
`;

export default NavBar;