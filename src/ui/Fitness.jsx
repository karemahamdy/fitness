import { Link } from "react-router-dom";

export default function Fitness({ filteredExercises }) {
  return (

    <div className="flex flex-wrap gap-4 mt-4">

      {filteredExercises.map((exercise, index) => (
        <>
          <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <div key={index} className="p-4 bg-white rounded-md w-[300px] text-center text-red-600">
              <img src={exercise.gifUrl} alt={exercise.gifUrl} />
              <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>

            </div>
          </Link>
        </>
      ))
      }
    </div>
  )
}
