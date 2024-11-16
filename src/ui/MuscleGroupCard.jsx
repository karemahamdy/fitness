import icon from "../assets/images/abdominals.png"

export const MuscleGroupCard = ({ title, isActive }) => (

  <div className={`flex  relative rounded-lg p-6 min-w-[25%]  h-[20vh] mr-4 ${isActive ? 'bg-gray-100' : 'bg-gray-800'
    }`}>
    <div className="absolute top-4 left-4">
      <div className="w-12 h-12">
        <img src={icon} alt="exersice" />
      </div>
    </div>
    <div className="absolute bottom-4 left-4">
      <p className="text-sm text-orange-400">workouts for</p>
      <h3 className="text-xl font-bold text-red-600">{title}</h3>
    </div>

  </div>
);