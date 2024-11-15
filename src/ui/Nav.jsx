import { Link, NavLink } from "react-router-dom";
import PricingPlans from "./PricingPlans";


export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink exact to="/" className="list-style">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="list-style">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/exercises" className="list-style">
            Exercises
          </NavLink>
        </li>
        <li>
          <Link id="plans"className="list-style">
            Plans
          </Link>
        </li>
      </ul>
    </nav>
  )
}
