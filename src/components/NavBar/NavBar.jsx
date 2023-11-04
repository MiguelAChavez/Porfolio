import "./navStyle.css";
import ButtonNav from "./ButtonNav.jsx";
import HamburgerButton from "./HamburgerButton";

function NavBar() {
  const handleClick = () => {
    alert("asd");
  };
  const itemText = ["Inicio", "Proyectos", "Contacto"];
  return (
    <header>
      <nav>
        <h2>Miguel</h2>
        <div>
          <ul className="nav-content-button">
            {itemText.map((text, index) => (
              <ButtonNav
                key={index}
                onAction={handleClick}
                text={text}
              ></ButtonNav>
            ))}
          </ul>
        </div>
        <div className="nav-burger-button">
          <HamburgerButton></HamburgerButton>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
