import hero from "../assets/images/hero.png"

export default function Hero() {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col gap-2">

      <h6 className="text-[50px] font-bold mt-24 mx-24">
        Achive Your
        <br/>
        <span className="font-bold text-[#D20C13]">
        Fitness Goals
        </span>
        <br />
        With FitMaker
      </h6>
        <p className="text-[#FFFFFF] text-lg">Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?</p>
      </div>
      <img src={hero} alt="hero"/>
    </section>
  )
}
