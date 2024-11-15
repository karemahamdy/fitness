import {   NavLink } from "react-router-dom";
import { Link } from "react-scroll";


export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink exact to="/" className="list-style">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"
            smooth={true}
            duration={1}
            className="list-style">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/exercises" className="list-style">
            Exercises
          </NavLink>
        </li>
        <li>
          <Link to="plans"
            smooth={true}
            duration={1}
            className="list-style">
            Plans
          </Link>
        </li>
      </ul>
    </nav>
  )
}
