import React from 'react';
import { useState } from 'react';
import { StyledContainer } from './components/style';
import CardLayout from './components/CardLayout';
import { Content } from "./components/SoruCevap";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StyledContainer style={{marginBottom:"5px"}}>
        <h1>Mülakat Soruları</h1>
      </StyledContainer>
      <CardLayout content={Content} />
    </>
  );
}

export default App;
