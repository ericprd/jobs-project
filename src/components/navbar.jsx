import {
  nav_container_style,
  nav_container_style_mobile,
  nav_style,
} from "../style/navbar-style";
import Hamburger from "./navbar-components/hamburger";
import Logo from "./navbar-components/logo";
import Menu from "./navbar-components/menu";

export default function Navbar() {
  return (
    <nav className={nav_style}>
      <div className={nav_container_style + nav_container_style_mobile}>
        <Logo />
        <Menu />
        <Hamburger />
      </div>
    </nav>
  );
}
