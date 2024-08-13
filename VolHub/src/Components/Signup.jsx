import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import backgroundImage from '../assets/Images/bg.jpg'; 
import logo from '../assets/Images/logo.png';
import userIcon from '../assets/Images/member.png'; // Import your user icon
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { UsedbContext } from '../Services/UseContext';  
import { Box, Text } from '@chakra-ui/react';
import { CreateUser } from '../Services/api';



const VolSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const {isVolunteer, setIsLogin, SignUp } = UsedbContext();

  useEffect(() => {
    // Disable scrolling when the form is visible
    if (isVolunteer) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isVolunteer]);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(getPasswordStrength(value));
  };

  const getPasswordStrength = (password) => {
    if (password.length < 6) return 'Too short';
    if (!/[A-Z]/.test(password)) return 'Include uppercase letters';
    if (!/[a-z]/.test(password)) return 'Include lowercase letters';
    if (!/[0-9]/.test(password)) return 'Include numbers';
    if (!/[@$!%*?&#]/.test(password)) return 'Include special characters';
    return 'Strong';
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordStrength !== 'Strong') {
      alert('Password is not strong enough!');
      return;
    }
    if (!validatePhoneNumber(phone)) {
      setPhoneError('Phone number must be 10 digits long');
      return;
    }
    
  await SignUp(email,password);
  await CreateUser({name,email,phno:phone, password,role:isVolunteer?"volunteer":"organizer"});
 
  }    

  return (
    <>
   
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" /> {/* Optional dark overlay */}
        </div>

        {/* Logo */}
        <Link to="/" className="absolute top-4 left-4 z-20">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-16 cursor-pointer"  // Adjust size as needed and add cursor-pointer
          />
        </Link>

        {/* Signup Form */}
        <div 
          className="relative z-10 w-full max-w-lg p-8 space-y-6 bg-white bg-opacity-20 rounded-xl shadow-lg backdrop-blur-md mt-2"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          {/* User Icon */}
          <div className="flex justify-center mb-4">
            <div className="p-2 rounded-full">
              <img 
                src={userIcon} 
                alt="User Icon" 
                className="w-16 h-16 object-contain" // Adjust size as needed
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-white">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError(''); // Clear error when user types
                }}
                className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {phoneError && <p className="mt-1 text-sm text-red-500">{phoneError}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <p className={`mt-1 text-sm ${passwordStrength === 'Strong' ? 'text-green-500' : 'text-red-500'}`}>
                {passwordStrength}
              </p>
            </div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 text-white bg-[#2980B9] rounded-lg hover:bg-[#aec8f0] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
          <Box className="text-sm text-center text-gray-300" cursor={'pointer'}
           onClick={() => setIsLogin(true)}
          >
            Already have an account? <Text className="text-blue-500">Login</Text>
          </Box>
        </div>
      </div>
  
    {/* ------for - organisation signup */}
    {/* {!isVolunteer && <OrgSignup />} */}
    </>
  );
};

export default VolSignup;
