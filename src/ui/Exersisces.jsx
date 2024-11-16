import { useEffect, useState } from "react";
import WorkoutCarousel from "../component/GroupCard ";
import { exerciseOptions, fetchData } from "../helper/FetchData";


export default function Exersisces() {

  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=10',
          exerciseOptions
        );    
        setBodyParts([...bodyPartsData]);
      } catch (error) {
        console.error("Error fetching body parts:", error);
      }
    };

    fetchExercisesData();
  }, []);

  return (
    <div>
      <WorkoutCarousel bodyParts={bodyParts} setBodyParts={setBodyParts} />
    </div>
  )
}
