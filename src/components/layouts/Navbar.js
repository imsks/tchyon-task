import { NAVBAR_LINK_ITEMS } from "../../utils/constants";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a className="navbar__logo__link" href="/">
          Tchyon
        </a>
      </div>
      <div className="navbar__links">
        {NAVBAR_LINK_ITEMS.map((navLink, key) => {
          const { label, route } = navLink;

          return (
            <a href={route} className="navbar__links__item" key={key}>
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
