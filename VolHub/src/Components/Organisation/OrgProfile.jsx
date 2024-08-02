import { useState } from 'react';
import { Avatar, Box, Button, Flex, Grid, Input, Text, FormControl, FormLabel, FormErrorMessage, useToast } from '@chakra-ui/react';

function OrgProfile() {
  const [avatarSrc, setAvatarSrc] = useState('https://bootdey.com/img/Content/avatar/avatar7.png');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    websiteURL: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState({});
  const toast = useToast(); // Initialize the toast

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    // Basic validation
    if (!formData.fullName) validationErrors.fullName = "Full Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.phone) validationErrors.phone = "Contact No is required";
    if (!formData.websiteURL) validationErrors.websiteURL = "Website URL is required";
    if (!formData.street) validationErrors.street = "Street is required";
    if (!formData.city) validationErrors.city = "City is required";
    if (!formData.state) validationErrors.state = "State is required";
    if (!formData.zipCode) validationErrors.zipCode = "Zip Code is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Perform authentication or submit the form
      console.log("Form data submitted:", formData);

      // Show success toast
      toast({
        title: "Success!",
        description: "Profile Updated!",
        status: "success",
        position: "top-right", // Position of the toast
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" minHeight="100vh" bg="#dcdee0"> {/* Changed background color */}
      <Box flex="1" p="8">
        <Box
          maxWidth="1200px"
          mx="auto"
          bg="white"
          boxShadow="xl" // Changed shadow
          borderRadius="md"
          p="6"
        >
          <form onSubmit={handleSubmit}>
            <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={6}>
              <Box textAlign="center">
                <Avatar size="xl" src={avatarSrc} mb="4" ml={7} mt={2} />
                <Button as="label" colorScheme="blue" cursor="pointer" mb="4" position="relative" mt={3} ml={7}> {/* Adjusted button position */}
                  Upload Your Image
                  <Input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    hidden
                  />
                </Button>
              </Box>

              <Box>
                <Text fontSize="lg" fontWeight="bold" color="blue.500" mb="4">Personal Details</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.fullName} mb="4" color={'black'}>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.fullName && <FormErrorMessage>{errors.fullName}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.email} mb="4" color={'black'}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email ID"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.phone} mb="4" color={'black'}>
                    <FormLabel>Contact No</FormLabel>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter contact number"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.websiteURL} mb="4" color={'black'}>
                    <FormLabel>Website URL</FormLabel>
                    <Input
                      name="websiteURL"
                      type="url"
                      value={formData.websiteURL}
                      onChange={handleChange}
                      placeholder="Enter website URL"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.websiteURL && <FormErrorMessage>{errors.websiteURL}</FormErrorMessage>}
                  </FormControl>
                </Grid>

                <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Address</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4} >
                  <FormControl isInvalid={!!errors.street} mb="4" color={'black'}>
                    <FormLabel>Street</FormLabel>
                    <Input
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="Enter Street"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.street && <FormErrorMessage>{errors.street}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.city} mb="4" color={'black'}>
                    <FormLabel>City</FormLabel>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter City"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.city && <FormErrorMessage>{errors.city}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.state} mb="4" color={'black'}>
                    <FormLabel>State</FormLabel>
                    <Input
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter State"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.state && <FormErrorMessage>{errors.state}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.zipCode} mb="4" color={'black'}>
                    <FormLabel>Zip Code</FormLabel>
                    <Input
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="Zip Code"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.zipCode && <FormErrorMessage>{errors.zipCode}</FormErrorMessage>}
                  </FormControl>
                  
                </Grid>

                <Button type="submit" colorScheme="blue" float="right">
                  Update
                </Button>
              </Box>
            </Grid>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default OrgProfile;
