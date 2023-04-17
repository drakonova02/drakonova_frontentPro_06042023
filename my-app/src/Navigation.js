import NavigationItem from './NavigationItem';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='main-navigation'>
      <ul>
        <NavigationItem link="#" linkText="Головна" />
        <NavigationItem link="#" linkText="Питання" />
        <NavigationItem link="#" linkText="Матеріали" />
        <NavigationItem link="#" linkText="Контакти" />
      </ul>
    </nav>
  );
}

export default Navigation;
