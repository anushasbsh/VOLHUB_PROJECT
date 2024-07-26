import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import backgroundVideo from '../../assets/Videos/landingVideo.mp4'; 

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    navigate('/vollogin');
  };

  const handleButtonClick2 = () => {
    navigate('/orglogin');
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-cover bg-center fixed inset-0 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center flex-1 text-center p-6 z-10">
        <NavBar />
        <div className="flex flex-col md:flex-row items-center justify-center flex-1 text-center p-6">
          <div className="flex-1 flex flex-col justify-center items-center p-4">
            <div className="text-4xl md:text-5xl font-bold mb-4 text-[#3a200f] font-sans">
              Connect with Opportunities
            </div>
            <div className="text-lg md:text-xl text-[#714321] mb-4">
  Explore thousands of volunteer and organizational opportunities.
</div>

            <div className="text-lg md:text-xl text-white font-medium mb-4">
              Our platform helps you find the right fit for volunteering or organizational roles, quickly and efficiently.
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleButtonClick1}
                className="px-6 py-3 bg-[#2980B9] text-[#ECF0F1] rounded-md shadow-md hover:bg-[#aec8f0] transition duration-300"
              >
                Volunteer
              </button>
              <button
                onClick={handleButtonClick2}
                className="px-6 py-3 bg-[#2980B9] text-[#ECF0F1] rounded-md shadow-md hover:bg-[#aec8f0] transition duration-300"
              >
                Organization
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
