import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, FormControl, FormLabel, Heading, Input, Image } from '@chakra-ui/react';
import backgroundImage from '../../assets/Images/bg.jpg'; 
import logo from '../../assets/Images/logo.png';
import userIcon from '../../assets/Images/member.png';

const VolLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
            <Image src={userIcon} alt="User Icon" boxSize="4rem" />
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
                  onChange={(e) => setPassword(e.target.value)}
                  focusBorderColor="blue.500"
                  backgroundColor="white"
                />
              </FormControl>
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
              <Link to="/volsignup" style={{ color: '#3b82f6' }}>Register</Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default VolLogin;
