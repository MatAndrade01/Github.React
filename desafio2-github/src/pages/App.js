
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/input';
import Button from '../components/Button';
import ItemRepo from '../components/itemRepo';

import { Container } from './style';

function App() {

  const [repos, setRepos] =  useState([]);



  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='github logo'/>
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
