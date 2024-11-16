import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { exerciseOptions, fetchData } from "../helper/FetchData";
import WorkoutCarousel from "./GroupCard ";
import Loader from "../ui/Loader";
import Button from "./Button";
import Exersisces from "../ui/Exersisces";

function SearchForm() {

  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);


  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {

      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=9&offset=0', exerciseOptions);
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
        <Button bg="bg-[#FF2625]" rounded="rounded-md" onClick={handleSearch}>Search</Button>

      </div>

      <Exersisces/>
      
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
