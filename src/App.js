import React from 'react';
import Movies from './components/Movies';
import Songs from './components/Songs';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Section = styled.div`
  width: 50%;
`;

const MoviesSection = styled(Section)`
  margin-right: 2%;
`;

const SongsSection = styled(Section)`
  margin-left: 2%;
`;


const App = () => {
  return (
    <Container>
      <MoviesSection>
        <Movies/>
      </MoviesSection>
      <SongsSection>
        <Songs/>
      </SongsSection>
    </Container>
  )
}

export default App