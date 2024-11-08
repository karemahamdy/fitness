import Logo from "../component/Logo";
import Nav from "./Nav";


export default function Header() {
  return (
    <section className="flex justify-between">
      <Logo />
      <Nav />
    </section>
  )
}
