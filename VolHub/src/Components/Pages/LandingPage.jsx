// src/pages/LandingPage.js
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    navigate('/vollogin');
  };

  const handleButtonClick2 = () => {
    navigate('/orglogin');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 text-center p-6">
        <div className="text-4xl md:text-5xl font-bold mb-4">
          Connect with Opportunities
        </div>
        <div className="text-lg md:text-xl text-purple-600 mb-4">
          Explore thousands of volunteer and organizational opportunities.
        </div>
        <div className="text-lg md:text-xl text-gray-700 font-medium mb-4">
          Our platform helps you find the right fit for volunteering or organizational roles, quickly and efficiently.
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleButtonClick1}
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-white hover:text-purple-600 transition duration-300"
          >
            Volunteer
          </button>
          <button
            onClick={handleButtonClick2}
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-white hover:text-purple-600 transition duration-300"
          >
            Organization
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
