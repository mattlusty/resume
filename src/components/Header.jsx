// style
import "../styles/css/Header.css";
// components
import Name from "./Name";

function Header(props) {
  return (
    <div className="Header">
      <div className="nameWrapper">
        <Name name="Matthew Lusty" />
        <div className="cvtext">Curriculum Vitae</div>
      </div>
    </div>
  );
}

export default Header;
