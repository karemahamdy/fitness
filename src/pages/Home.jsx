import PricingPlans from "../ui/PricingPlans";
import SearchForm from "../component/Searchbar";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import StatsBanner from "../ui/StatsBanner";
import Footer from "../ui/Footer";



export default function Home() {
  return (
    <div className="container flex flex-col gap-8">
      <Header />
      <Hero />
      <StatsBanner />
      <SearchForm />
      <PricingPlans />
      <Footer/>
    </div>
  )
}
