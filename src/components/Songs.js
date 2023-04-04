import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from '../store';

const songsData = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California', 'Sweet Child o\' Mine', 'Imagine', 'Billie Jean', 'Let it Be', 'Hey Jude', 'Smells Like Teen Spirit'];

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '+';
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #456648;
  margin-right: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SongButton = styled.button`
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-bottom: 12px;
`;

const Songs = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  const handleAddSongs = () => {
    const randomIndex = Math.floor(Math.random() * songsData.length);
    const randomSong = songsData[randomIndex];
    dispatch(addSong(randomSong));
  }

  const handleRemoveSong = (e, song) => {
    e.preventDefault();
    dispatch(removeSong(song));
  }

  return (
    <>
      <Wrapper>
        <HeaderText>Songs</HeaderText>
        <Button onClick={handleAddSongs}>
          Add Songs
        </Button>
      </Wrapper>

      {songs.map((song, index) => <SongButton key={index} onClick={(e) => handleRemoveSong(e,song)}>
          {song}
      </SongButton>)}
    </>
  )
}

export default Songs;