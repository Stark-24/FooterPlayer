import React from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '../assets/play-circle.jsx';

var QueueItemView = ({song, queueItemClickHandler, index}) => {
  // console.log(queueItemViewSelect)
  return ( 
    <ItemWrapper onClick={() => queueItemClickHandler(song, index)}> 
      <ItemView id="itemView" 
        // style={{background: queueItemViewSelect.background}}
        // onMouseOver={} 
        // onMouseLeave={}
      >
        <DragHandle/>
        {/* Artwork */}
        <ItemArtwork>
          <ArtworkImage 
            style={{backgroundImage: `url(${song.album_art})`}}
          />
          {/* <div style={{visibility: queueItemViewSelect.visibility}}> */}
            <PlayCircleIcon/>

          {/* </div> */}
        </ItemArtwork>
        {/* Details */}
        <ItemDetails>
          <ItemDetailsArtist>
            <ArtistLink> {song.artist} </ArtistLink>
          </ItemDetailsArtist>
          <ItemDetailsSong>
            <SongLink> {song.title} </SongLink>
          </ItemDetailsSong>
        </ItemDetails>
        {/* Duration */}
        <ItemDuration> 4:30 </ItemDuration>
      </ItemView>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display: block;
  background-color: #fff;
  position: relative;
  /* top: 0;
  left: 0;
  right: 0; */
  height: 48px;
  width: 100%;
  transition-property: transform,opacity,visibility;
  transition-duration: .3s;
  /* transform: translate(0px, -4224px); */
`;

const ItemView = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  font-size: 12px;
  box-sizing: border-box;
  font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans;
  font-weight: 100;
`;

const DragHandle = styled.div`
  cursor: move;
  display: block;
  border: 0;
  /* background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…J2Mkg5Vjl6bTAgNGgydjJIOXYtMnptMCA0aDJ2Mkg5di0yeiIvPgogICAgPC9nPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 24px 24px; */
  width: 24px;
  height: 48px;
  margin-left: -24px;
  flex-shrink: 0;
  visibility: hidden;
`;

const ItemArtwork = styled.div`
  display: block;
  transition: opacity .3s;
  position: relative;
  margin-right: 7px;
`;

const ArtworkImage = styled.div`
  display: block;
  height: 32px;
  width: 32px;
  opacity: 1;
  box-shadow: rgba(0,0,0,.1)0 0 0 1px inset;
  text-align: center;
  position: relative;
  background-repeat: no-repeat;
  transition: opacity .2s linear;
  background-size: cover;
  background-position: 50% 50%;
`;

// const PlayButton = styled(PlayCircleIcon)`
//   position: absolute;
//   top: 3px;
//   left: 4px;
//   display: none;
// `;

const ItemDetails = styled.div`
  display: block;
  transition: opacity .3s;
  overflow: hidden;
  flex-grow: 1;
`;

const ItemDetailsArtist = styled.div`
  color: #999;
  display: flex;
`;

const ItemDetailsSong = styled.div`
  display: flex;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
`;

const SongLink = styled.a`
  cursor: pointer;
  color: #333;
  text-decoration: none;
`;

const ArtistLink = styled(SongLink)`
  color: #999;
  flex: 0 1 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
`;

const ItemDuration = styled.div`
  display: block;
  text-align: right;
  line-height: 36px;
  min-width: 52px;
  color: #999;
  font-family: InterstateSound Tnum, Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans;
  font-weight: 100;
`;

export default QueueItemView;