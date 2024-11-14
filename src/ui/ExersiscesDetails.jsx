import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { exerciseOptions, fetchData } from '../hooks/FetchData';

const ExerciseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});

  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail;

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData); 
        console.log(exerciseDetailData)
      } catch (error) {
        console.error("Error fetching exercise details:", error);
      }
    };

    fetchExercisesData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <button
            className="flex items-center text-blue-500 hover:text-blue-400"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column - Exercise Image */}
          <div className="bg-blue-600 p-6 rounded-lg">
            <h2 className="text-white text-xl font-bold mb-4">{name || 'Loading...'}</h2>
            <div className="bg-white p-4 rounded-lg mb-4">
              {gifUrl ? <img src={gifUrl} alt={name} /> : <p>Loading image...</p>}
            </div>
            <div className="flex gap-2">
              <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
                {bodyPart || 'Loading...'}
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
                {equipment || 'Loading...'}
              </span>
            </div>
              <span className=" text-white px-3 py-1  text-sm">
                {target }
              </span>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-white text-xl font-bold mb-4">Instructions</h2>
            <ol className="space-y-4">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4 text-white">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
