import { NavLink } from 'react-router-dom';
function BottomMenu() {

  return <ul className="nav flex-column">

    <li className="nav-item">
      <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="about">О магазине</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
    </li>
  </ul>

}
export default BottomMenu