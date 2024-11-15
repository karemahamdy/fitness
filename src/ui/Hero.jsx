import Button from "../component/Button"
import hero from "../assets/images/hero.png"

export default function Hero() {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col gap-4">

      <h6 className="text-[50px] font-bold mt-24 mx-24">
        Achive Your
        <br/>
        <span className="font-bold text-[#D20C13]">
        Fitness Goals
        </span>
        <br />
        With FitMaker
        </h6>
        <p className="text-[#FFFFFF] text-lg mb-6">Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?</p>
        <div className="flex gap-3">
          <Button bg="bg-[#FF2625]" rounded="rounded-full">Start Your Journey </Button>
          <Button bg="transparent" rounded="rounded-full">Explore Programs </Button>
        {/* <Button>search </Button> */}
        </div>

      </div>
      <img src={hero} alt="hero"/>
    </section>
  )
}
