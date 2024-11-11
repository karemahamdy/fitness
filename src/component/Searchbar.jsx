import { exerciseOptions, fetchData } from "../hooks/FetchData";
import {  useEffect, useState } from "react";

function SearchForm() {

  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
     console.log(bodyPartsData)
      setBodyParts(['all', ...bodyPartsData]);

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

  

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
  <>
      <div className="flex gap-2 mb-3">
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
          </>
  );
}

export default SearchForm;
