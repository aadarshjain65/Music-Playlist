import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #152850;
`

export const BackgroundContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  font-size: 42px;
  color: #ffffff;
  font-weight: bold;
`

export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  color: #ffffff;
  font-weight: 400;
`

export const PlaylistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const PlaylistHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weigth: bold;
  color: #ffffff;
`

export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const MusicList = styled.ul`
  padding: 0px;
  margin-left: 50px;
  margin-right: 50px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
`
