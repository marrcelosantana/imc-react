import { AiFillGithub } from 'react-icons/ai';
import { Container } from './styles';

export function Header () {
  return (
    <Container>
      <span>IMC</span>
      <a href="https://github.com/marrcelosantana" target="_blank" rel='noreferrer'>
        <AiFillGithub size={40} cursor='pointer' color='#ffffff'/>
      </a>
    </Container>
  )
}