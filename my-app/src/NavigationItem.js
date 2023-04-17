import './NavigationItem.css';

function NavigationItem({link, linkText}) {
  return (
    <li>
      <a href={link}>{linkText}</a>
    </li>
  );
}

export default NavigationItem;
