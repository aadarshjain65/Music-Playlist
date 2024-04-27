import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`

export const MusicTrackImage = styled.img`
  height: 100px;
  width: 140px;
  margin-right: 20px;
`

export const NameGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff;
  font-weight: 400;
  margin-bottom: 0;
`

export const Genre = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #3b82f6;
  font-weight: 400;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Duration = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff;
  font-weight: 400;
  margin-right: 40px;
`

export const DeleteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
`
