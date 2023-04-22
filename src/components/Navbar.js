import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  console.log("navbar",props)
  const {total} =props;
  return (
    <div className="container">
      <ul className="nav">
        <li >
          {/* ecommarce navbar */}
          <Link to="/" className="ecom-nav">ecommarce</Link>
        </li>
        <li>Products</li>
        <li style={{ flex: 2 }}>
          <Link to="/addproduct">
            <button className="addbtn">Add To Product </button>
          </Link>
        </li>
        <li>SAVITA OGARE</li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/1184/1184438.png" />
        </li>
        <li>
          {/* count total product */}
          <span className="totalproduct">{total}</span>
          <img src="https://cdn-icons-png.flaticon.com/512/891/891407.png" />
        </li>
      </ul>
    </div>
  );
};
export default Navbar;