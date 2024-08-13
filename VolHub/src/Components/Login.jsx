import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, FormControl, FormLabel, Heading, Input, Image, Text } from '@chakra-ui/react';
import backgroundImage from '../assets/Images/bg.jpg'; 
import logo from '../assets/Images/logo.png';
import userIcon from '../assets/Images/member.png';
import members from '../assets/Images/members.png';
import { FcGoogle } from "react-icons/fc";
import { UsedbContext } from '../Services/UseContext';

const VolLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError,setLoginError] = useState('');
  const { google,setIsLogin,isVolunteer, SignIn } = UsedbContext();

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Password validation  
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters.');
      return;
    }
    
    try {
      await SignIn(email,password);
     
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred. Please try again later.');
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <Box 
      position="relative"
      minHeight="100vh"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box
        position="absolute"
        inset="0"
        backgroundColor="rgba(0, 0, 0, 0.5)"
      />

      {/* Logo */}
      <Link to="/" className="absolute top-4 left-4 z-20">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-16 cursor-pointer"  // Adjust size as needed and add cursor-pointer
        />
      </Link>

      {/* Login Form */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        position="relative"
        zIndex={2}
      >
        <Box
          width="full"
          maxW="md"
          bg="rgba(255, 255, 255, 0.3)"
          borderRadius="15px"
          boxShadow="lg"
          p="8"
          backdropFilter="blur(10px)"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          {/* User Icon */}
          <Stack spacing={4} align="center" mb={4}>
            {isVolunteer&&<Image src={userIcon} alt="User Icon" boxSize="4rem" />}
            {!isVolunteer&&<Image src={members} alt="User Icon" width={'100px'} />}
            <Heading as="h1" size="lg" textAlign="center" color="#d5d8dc">Login</Heading>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="email" color="#d5d8dc">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  color={"black"}
                  onChange={(e) => setEmail(e.target.value)}
                  focusBorderColor="blue.500"
                  backgroundColor="white"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password" color="#d5d8dc">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  color={"black"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(''); // Clear error on change
                  }}
                  focusBorderColor="blue.500"
                  backgroundColor="white"
                />
                {passwordError && (
                  <Text color="red.500" mt={2}>{passwordError}</Text>
                )}
                {loginError && (
                  <Text color="red.500" mt={2}>{loginError}</Text>
                )}
              </FormControl>
               
                  {/* ---------google---icon----- */}
            <Box className="mt-6 flex flex-col items-center justify-center w-full">
               {/* <Box border={'1px solid gray '} className="w-full"/> */}
               <Text>OR</Text>
               {/* <Box border={'1px solid gray '} className="w-full"/> */}
              <Box className="mt-4" onClick={google} cursor={'pointer'}>
                <FcGoogle size={'30px'}/>
              </Box>
            </Box>

            
              <Button
                type="submit"
                bg="#2980B9"
                width="full"
                textColor={'white'}
                mt={4}
              >
                Login
              </Button>
            </Stack>
          </form>
          <Stack mt={4} spacing={4} textAlign="center">
            <Box color="#d5d8dc">
              Don&apos;t have an account?{' '}
              <Text style={{ color: '#3b82f6' }}  onClick={()=>setIsLogin(false)} cursor={'pointer'}>Register</Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default VolLogin;
