import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from '../store';

const moviesData = ['The Godfather', 'The Shawshank Redemption', 'The Dark Knight', 'Pulp Fiction', 'Forrest Gump', 'The Matrix', 'Star Wars', 'The Lord of the Rings', 'The Avengers'];

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

const MovieButton = styled.button`
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

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state => state.movies));
  const handleAddMovie = () => {
    const randomIndex = Math.floor(Math.random() * moviesData.length);
    const randomMovie = moviesData[randomIndex];
    dispatch(addMovie(randomMovie));
  }

  const handleRemoveMovie = (e,movie) => {
    e.preventDefault();
    dispatch(removeMovie(movie));
  }

  return (
    <>
      <Wrapper>
        <HeaderText>Movies</HeaderText>
        <Button onClick={handleAddMovie}>
          Add movies
        </Button>
      </Wrapper>
      {movies.map((movie, index) => <MovieButton key={index} onClick={(e) => handleRemoveMovie(e,movie)}>{movie}</MovieButton>)}
    </>
  )
}

export default Movies