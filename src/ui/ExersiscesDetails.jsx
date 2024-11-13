import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { exerciseOptions, fetchData } from '../hooks/FetchData';



const ExerciseDetail = () => {
  const navigate = useNavigate();
  // const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {


  const fetchExercisesData = async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    // const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
    setExerciseDetail(exerciseDetailData);

    // const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
    // setExerciseVideos(exerciseVideosData.contents);

    // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
    // setTargetMuscleExercises(targetMuscleExercisesData);

    // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
    // setEquipmentExercises(equimentExercisesData);
  };

  fetchExercisesData();
}, [id]);



  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <button className="flex items-center text-blue-500 hover:text-blue-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
          
            <button onClick={() => navigate(-1)}>go back</button>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column - Exercise Image */}
          <div className="bg-blue-600 p-6 rounded-lg">
            <h2 className="text-white text-xl font-bold mb-4">3/4 Sit-ups</h2>
            <div className="bg-white p-4 rounded-lg mb-4">
              <img
                src="/api/placeholder/400/300"
                alt="3/4 Sit-ups exercise demonstration"
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
                Abdominals
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
                Body weight
              </span>
            </div>
          </div>

          {/* Right Column - Instructions */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-white text-xl font-bold mb-4">Instructions</h2>
            {/* <ol className="space-y-4">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4 text-white">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;