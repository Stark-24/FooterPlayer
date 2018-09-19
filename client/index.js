import React from 'react';
import ReactDOM from 'react-dom';
import FooterPlayer from './components/FooterPlayer.jsx'; 
import NavBar from './components/NavBar.jsx';

ReactDOM.render(
  <NavBar/>,
  document.getElementById('NavBar')
);

ReactDOM.render(
  <FooterPlayer />,
  document.getElementById('FooterPlayer')
);