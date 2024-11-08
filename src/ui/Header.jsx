import Logo from "../components/Logo";
import Nav from "./Nav";


export default function Header() {
  return (
    <div className="flex justify-between">
      <Logo/>
      <Nav />
    </div>
  )
}
