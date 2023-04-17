import Description from './Description';
import Logo from './Logo';
import logo from './logo.svg';
import './Main.css';

function Main() {
  return (
    <main className='main'>
      <Description text="Це сайт для підготовки до співбесіди на позицію фронтенд" />
      <Logo src={logo} />
    </main>
  );
}

export default Main;
