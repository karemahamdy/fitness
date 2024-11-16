import { SearchedExercises } from "../ui/SearchExercise";
import SearchForm from "../component/Searchbar";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import PricingPlans from "../ui/PricingPlans";
import StatsBanner from "../ui/StatsBanner";

export default function Home() {
  return (
    <div className="container flex flex-col gap-8">
      <Header />
      <Hero />
      <StatsBanner />
      {/* <SearchForm /> */}
      <SearchedExercises/>
      <PricingPlans />
      <Footer />
    </div>
  )
}
