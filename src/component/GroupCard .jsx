import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MuscleGroupCard = ({ title, isActive }) => (

  <div className={`relative rounded-lg p-6 min-w-[240px] h-[160px] mr-4 ${isActive ? 'bg-blue-600' : 'bg-gray-800'
    }`}>
    <div className="absolute top-4 left-4">
      <div className="w-12 h-12">
      
      </div>
    </div>
    <div className="absolute bottom-4 left-4">
      <p className="text-sm text-gray-400">workouts for</p>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <button className="absolute bottom-4 right-4 p-2 rounded-full bg-red-500 hover:bg-red-600">
      <ChevronRight className="w-5 h-5 text-white" />
    </button>
  </div>
);

const WorkoutCarousel = () => {
  const muscleGroups = [
    'Abdominals',
    'Biceps',
    'Chest',
    'Back',
    'Shoulders',
    'Legs',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? muscleGroups.length - 3 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === muscleGroups.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-gray-900 p-8 min-h-screen">
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
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
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
            {muscleGroups.map((group, index) => (
              <MuscleGroupCard
                key={group}
                title={group}
                isActive={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCarousel;