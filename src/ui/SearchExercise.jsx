import { useState } from "react";
import { exerciseOptions, fetchData } from "../helper/FetchData";
import Exersisces from "./Exersisces";
import Fitness from "./Fitness";
import SearchForm from "../component/Searchbar";

export function SearchedExercises() {
  const [search, setSearch] = useState('');
  const [ setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=9&offset=0', exerciseOptions);
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
      <SearchForm value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onClick={handleSearch}
      />
      <Exersisces />
      <Fitness filteredExercises={filteredExercises} />

    </>
  )
}