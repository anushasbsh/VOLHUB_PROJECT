import { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/Images/bg.jpg'; 
import logo from '../../assets/Images/logo.png';
import userIcon from '../../assets/Images/members.png'; // Import your user icon

const OrgSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [interests, setInterests] = useState('');
  const [resume, setResume] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Date of Birth:', dob);
    console.log('Interests:', interests);
    console.log('Resume:', resume?.name); // Show resume file name
    // Implement your registration logic here
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
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
  className="relative z-10 w-full max-w-lg p-8 space-y-6 bg-white bg-opacity-20 rounded-xl shadow-lg backdrop-blur-md my-10" 
  style={{ backdropFilter: 'blur(10px)' }}
>

        {/* User Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-2 rounded-full">
            <img 
              src={userIcon} 
              alt="User Icon" 
              className="w-21 h-20 object-contain" // Adjust size as needed
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
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Interests</label>
            <textarea
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Resume Upload</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-2 text-white bg-[#2980B9] rounded-lg hover:bg-[#aec8f0] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-300">
          Already have an account? <Link to="/orglogin" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default OrgSignup;
