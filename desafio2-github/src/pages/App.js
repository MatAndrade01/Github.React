import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/input';
import Button from '../components/Button';
import ItemRepo from '../components/itemRepo';
import { api } from '../services/api';

import { Container } from './style';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {

      const isExiste = repos.find(repo => repo.id === data.id);

      if(!isExiste){
        setRepos((prev) => [...prev, data]);
        setCurrentRepo('')
        return
      }
    }
     alert('Repositorio não encontrado')
  };

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    setRepos((prevRepos) => prevRepos.filter((repo) => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='GitHub logo' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (<ItemRepo hadleRemoveRepo={handleRemoveRepo} repo={repo} />))}
    </Container>
  );
}

export default App;
