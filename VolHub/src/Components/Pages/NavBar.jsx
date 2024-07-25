import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/logo.jpg'

const NavBar = () => {
  const navigate = useNavigate();

  const handleVolunteerClick = () => {
    navigate('/vollogin');
  };

  const handleOrganizerClick = () => {
    navigate('/orglogin');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10" // Adjust the height as needed
          />
        </Link>
        
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <div className="relative group">
            <button className="text-white hover:text-gray-300">
              About Us
            </button>
            <div className="absolute left-0 hidden mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg group-hover:block">
              <div className="p-4">
                <h3 className="text-lg font-semibold">About Us</h3>
                <p>Learn more about our mission and values. We are dedicated to connecting volunteers with organizations that need their help.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button 
              className="text-white hover:text-gray-300"
              onClick={handleVolunteerClick}
            >
              Volunteer
            </button>
            <div className="absolute left-0 hidden mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg group-hover:block">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Volunteer</h3>
                <p>Explore various volunteer opportunities and make a difference in your community.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button 
              className="text-white hover:text-gray-300"
              onClick={handleOrganizerClick}
            >
              Organizer
            </button>
            <div className="absolute left-0 hidden mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg group-hover:block">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Organizer</h3>
                <p>Learn how to create and manage volunteer events and projects effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
