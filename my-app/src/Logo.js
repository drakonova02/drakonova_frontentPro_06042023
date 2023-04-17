import './Logo.css';

function Logo({src}) {
  return (
    <picture className='logo'>
      <img src={src} />
    </picture>
  );
}

export default Logo;
