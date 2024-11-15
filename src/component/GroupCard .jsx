import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import  icon  from "../assets/images/abdominals.png"

const MuscleGroupCard = ({ title, isActive }) => (

  <div className={`flex  relative rounded-lg p-6 min-w-[25%]  h-[20vh] mr-4 ${isActive ? 'bg-gray-100' : 'bg-gray-800'
    }`}>
    <div className="absolute top-4 left-4">
      <div className="w-12 h-12">
      <img src={icon} alt="exersice"/>
      </div>
    </div>
    <div className="absolute bottom-4 left-4">
      <p className="text-sm text-orange-400">workouts for</p>
      <h3 className="text-xl font-bold text-red-600">{title}</h3>
    </div>
  
  </div>
);

const WorkoutCarousel = ({ bodyParts }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? bodyParts.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === bodyParts.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <section id="exercises" className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            Discover Workouts by Muscle Group
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-orange-600 hover:bg-orange-700"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 260}px)`
            }}
          >
            {bodyParts.map((item, index) => (
              <MuscleGroupCard
                key={index}
                title={item}
                isActive={index === currentIndex}
                
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutCarousel;