import SearchForm from "../components/Searchbar";
import StatsBanner from "../ui/Card";
import Header from "../ui/Header";
import Hero from "../ui/Hero";



export default function Home() {
  return (
    <div className="container flex flex-col gap-8">
      <Header />
      <Hero />
      <StatsBanner/>
      <SearchForm/>
    </div>
  )
}