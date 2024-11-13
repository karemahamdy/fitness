import { exerciseOptions, fetchData } from "../hooks/FetchData";
import { useEffect, useState } from "react";
import WorkoutCarousel from "./GroupCard "
import { Link } from "react-router-dom";

function SearchForm() {

  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
      
        const bodyPartsData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          exerciseOptions
        );

        console.log("Body Parts Data:", bodyPartsData); 
        setBodyParts([ ...bodyPartsData]); 
      } catch (error) {
        console.error("Error fetching body parts:", error);
      }
    };

    fetchExercisesData();
  }, []); 

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(exercisesData)

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
      );

      setFilteredExercises(searchedExercises);
      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
  <>
      <div className="flex  gap-2 mb-3">
        <input
          className="w-[350px] lg:w-[1170px] h-[56px] font-bold  border-none focus:border-none rounded-md bg-white text-black px-4 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          />
    
    
      <button
        className="bg-[#FF2625] text-white font-normal h-[56px] w-[80px] lg:w-[173px] text-[14px] lg:text-[20px] rounded-md"
        onClick={handleSearch}
      >
        Search
        </button>
      </div>
      <WorkoutCarousel bodyParts={bodyParts} setBodyParts={setBodyParts} />
      
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
          </>
  );
}

export default SearchForm;
