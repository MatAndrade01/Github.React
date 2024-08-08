
import gitLogo from '../assets/github.png'
import Input from '../components/input';
import ItemRepo from '../components/itemRepo';

import { Container } from './style';

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='github logo'/>
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
