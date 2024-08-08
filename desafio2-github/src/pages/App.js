
import gitLogo from '../assets/github.png'
import Input from '../components/input';

import { Container } from './style';

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='github logo'/>
      <Input />
    </Container>
  );
}

export default App;
