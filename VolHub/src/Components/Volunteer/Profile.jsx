import { useState } from 'react';
import { Avatar, Box, Button, Flex, Grid, Input, Text } from '@chakra-ui/react';
import Sidebar from './Sidebar';

function Profile() {
  const [avatarSrc, setAvatarSrc] = useState('https://bootdey.com/img/Content/avatar/avatar7.png');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p="8" bg="#f5f6fa">
        <Box maxWidth="1200px" mx="auto">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={6}>
            <Box bg="white" boxShadow="md" borderRadius="md" p="6">
              <Box textAlign="center">
                <Avatar size="xl" src={avatarSrc} mb="4" />
                <Button as="label" colorScheme="blue" cursor="pointer">
                  Upload Your Image
                  <Input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    hidden
                  />
                </Button>
              </Box>
              <Box textAlign="center" mt="4">
                <Text fontSize="xl" fontWeight="bold" color="black">Yuki Hayashi</Text>
                <Text fontSize="sm" color="black">yuki@Maxwell.com</Text>
                <Text fontSize="sm" mt="2" color="black">
                  I&apos;m Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.
                </Text>
              </Box>
            </Box>

            <Box bg="white" boxShadow="md" borderRadius="md" p="6">
              <Text fontSize="lg" fontWeight="bold" color="blue.500" mb="4">Personal Details</Text>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                <Box>
                  <Text mb="2" fontSize="sm" fontWeight="semibold" color="black">Full Name</Text>
                  <Input 
                    placeholder="Enter full name" 
                    border="1px solid #cfd1d8" 
                    borderColor="#cfd1d8"
                    color="black"
                  />
                </Box>
                <Box>
                  <Text mb="2" fontSize="sm" fontWeight="semibold" color="black">Email</Text>
                  <Input 
                    placeholder="Enter email ID" 
                    border="1px solid #cfd1d8" 
                    borderColor="#cfd1d8"
                    color="black"
                  />
                </Box>
                <Box>
                  <Text mb="2" fontSize="sm" fontWeight="semibold" color="black">Phone</Text>
                  <Input 
                    placeholder="Enter phone number" 
                    border="1px solid #cfd1d8" 
                    borderColor="#cfd1d8"
                    color="black"
                  />
                </Box>
                <Box>
                  <Text mb="2" fontSize="sm" fontWeight="semibold" color="black">Website URL</Text>
                  <Input 
                    placeholder="Website URL" 
                    border="1px solid #cfd1d8" 
                    borderColor="#cfd1d8"
                    color="black"
                  />
                </Box>
              </Grid>
              
              <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Address</Text>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                <Box>
                  <Text mb="2" fontSize="sm" fontWeight="semibold" color="black">Street</Text>
                  <Input 
                    placeholder="Enter Street" 
                    border="1px solid #cfd1d8" 
                    borderColor="#cfd1d8"
                    color="black"
                  />
                </Box>
                <Box>
                  <Text mb="2" fontSize="sm" fontWeight="semibold" color="black">City</Text>
                  <Input 
                    placeholder="Enter City" 
                    border="1px solid #cfd1d8" 
                    borderColor="#cfd1d8"
                    color="black"
                  />
                </Box>
                <Box>
                  <Text mb="2" fontSize="sm" fontWeight="semibold" color="black">State</Text>
                  <Input 
                    placeholder="Enter State" 
                    border="1px solid #cfd1d8" 
                    borderColor="#cfd1d8"
                    color="black"
                  />
                </Box>
                <Box>
                  <Text mb="2" fontSize="sm" fontWeight="semibold" color="black">Zip Code</Text>
                  <Input 
                    placeholder="Zip Code" 
                    border="1px solid #cfd1d8" 
                    borderColor="#cfd1d8"
                    color="black"
                  />
                </Box>
              </Grid>

              <Box textAlign="right" mt="6">
                <Button colorScheme="gray" mr="3">Cancel</Button>
                <Button colorScheme="blue">Update</Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
}

export default Profile;
