// src/Home.js

import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    navigate('/vollogin'); 
  };
  const handleButtonClick2 = () => {
    navigate('/orglogin'); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative flex flex-col items-center justify-center text-center">
        <div className="letter text-center font-raleway text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Find your dream job now
        </div>
        <div className="para text-center font-raleway text-lg md:text-xl text-purple-600 mb-4 animate-fadeIn">
          <h1>HII</h1>3lakh+ jobs for you to explore
        </div>
        <div className="p text-center font-raleway text-lg md:text-xl text-gray-700 font-medium mb-4 animate-fadeIn">
          AI Recruitment Software designed to source and hire candidates faster.
        </div>
        <button
          onClick={handleButtonClick1}
          className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-white hover:text-purple-600 transition duration-300"
        >
          Volunteer
        </button>
        <button
          onClick={handleButtonClick2}
          className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-white hover:text-purple-600 transition duration-300"
        >
          Organization
        </button>
      </div>
      <div className="sidpic mt-8">
        
      </div>
    </div>
  );
};

export default LandingPage;
