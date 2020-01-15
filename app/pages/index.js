import React, { useState } from 'react';
import Container from 'Components/Container';
import { H1 } from 'Components/H';
import Button from 'Components/Button';

const Index = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <Container>
        <H1>next.js starter</H1>

        <Button onClick={() => { setCounter(counter + 1); }}>increase &rarr;</Button> {counter}
      </Container>
    </main>
  );
};

export default Index;
